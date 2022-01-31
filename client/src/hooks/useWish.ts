import Taro from "@tarojs/taro";
import { reactive, ref } from "vue";

export default function(refresh: Function) {
  const showPop = ref(false);
  const defaultContent = () => ({
    text: "",
    name: "",
    message: "",
    nickName: "",
    avatarUrl: "",
  });
  const wishContent = reactive(defaultContent());
  const resetContent = () => {
    Object.assign(wishContent, defaultContent());
  };
  const showToast = ref(false);
  const ruleForm = ref<any>(null);
  const toastText = ref("感谢您的祝福");
  const onSubmit = () => {
    ruleForm.value.validate().then(({ valid }: any) => {
      if (valid) {
        const db = Taro.cloud.database();
        db.collection("message")
          .add({
            data: {
              ...wishContent,
              time: new Date().getTime(),
            },
          })
          .then(() => {
            showToast.value = true;
            setTimeout(() => {
              showToast.value = false;
            }, 3000)
            showPop.value = false;
            resetContent();
            refresh();
          })
          .catch(() => {
            toastText.value = "哎呀服务器出小差了";
            showToast.value = true;
            setTimeout(() => {
              showToast.value = false;
            }, 3000)
            resetContent();
          });
      }
    });
  };
  const onBtnClick = () => {
    const user = Taro.getStorageSync("userInfo");
    if (user) {
      wishContent.avatarUrl = user.avatarUrl;
      wishContent.nickName = user.nickName;
      showPop.value = true;
    } else {
      Taro.getUserProfile({
        lang: "zh_CN",
        desc: "获取昵称和头像",
        success: ({ userInfo }) => {
          wishContent.avatarUrl = userInfo.avatarUrl;
          wishContent.nickName = userInfo.nickName;
          Taro.setStorageSync("userInfo", userInfo);
        },
        complete: () => {
          showPop.value = true;
        },
      });
    }
  };
  return {
    showPop,
    wishContent,
    showToast,
    ruleForm,
    toastText,
    onSubmit,
    onBtnClick,
  };
}
