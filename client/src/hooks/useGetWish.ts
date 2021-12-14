import { computed, onMounted, ref } from "vue";
import Taro from "@tarojs/taro";
interface WishList {
  avatarUrl: string;
  message: string;
  name: string;
  nickName: string;
  text: string;
  _id: string;
  _openid: string;
  time: number;
}
export default function() {
  const wishList = ref<WishList[]>([]);
  const getWishes = () => {
    Taro.cloud
      .callFunction({
        name: "getAllWishes",
      })
      .then(({ result }) => {
        if (result && typeof result !== "string") {
          if (result.data) {
            wishList.value = result.data;
          }
        }
      });
  };
  const page = ref(1);
  const pageSize = 10;
  const wishListLimit = computed(() =>
    wishList.value.slice(0, page.value * pageSize)
  );
  onMounted(() => {
    getWishes();
  });
  return {
    wishList,
    getWishes,
    wishListLimit,
    page,
    total: computed(() => wishList.value.length),
  };
}
