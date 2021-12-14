<script lang="ts" setup>
/**
 * @description 模板容器组件
 * @author huahaoze
 * @date 2021-11-22
 */
import useWish from "@/hooks/useWish";
import useGetWish from "@/hooks/useGetWish";
import WishBox from "@/components/wish-box.vue";
import { computed, ref } from "vue";
import Taro from "@tarojs/taro";

Taro.showShareMenu({
  withShareTicket: true,
});
const { getWishes, page, total, wishListLimit } = useGetWish();
const {
  showPop,
  wishContent,
  showToast,
  ruleForm,
  toastText,
  onSubmit,
  onBtnClick,
} = useWish(getWishes);
const wishListC1 = computed(() =>
  wishListLimit.value.filter((i, index) => index % 2 === 0)
);
const wishListC2 = computed(() =>
  wishListLimit.value.filter((i, index) => index % 2 === 1)
);

const lower = () => {
  if (wishListLimit.value.length < total.value) {
    page.value += 1;
  }
};
const toView = () => {};
const scrollTop = ref(0);

</script>
<template>
  <div class="message-wrap">
    <nut-toast :msg="toastText" v-model:visible="showToast" :type="'success'" />
    <scroll-view
      :scroll-y="true"
      class="scroll-view"
      style="height: 100%;"
      @scrolltolower="lower"
      :scroll-into-view="toView"
      :scroll-top="scrollTop"
    >
      <div class="scroll-content">
        <div class="scroll-column">
          <WishBox
            v-for="i in wishListC1"
            :key="i._id"
            :content="i.text"
            :name="i.name || i.nickName"
            :time="i.time"
            :img="i.avatarUrl"
          ></WishBox>
        </div>
        <div class="scroll-column">
          <WishBox
            v-for="i in wishListC2"
            :key="i._id"
            :content="i.text"
            :name="i.name || i.nickName"
            :time="i.time"
            :img="i.avatarUrl"
          ></WishBox>
        </div>
      </div>
    </scroll-view>

    <div class="main-button-wrap">
      <nut-button
        class="main-button"
        type="primary"
        @click="onBtnClick"
        icon="s-follow"
        color="#ebbe87"
        plain
        >我要祝福</nut-button
      >
    </div>

    <nut-popup
      round
      position="bottom"
      closeable
      class="wish-pop"
      v-model:visible="showPop"
    >
      <nut-cell-group title="自定义右侧箭头区域">
        <nut-form :model-value="wishContent" ref="ruleForm">
          <nut-form-item
            label="贺词"
            prop="text"
            required
            :rules="[
              {
                required: true,
                regex: /^.{4}$/,
                message: '请输入四字祝福',
              },
            ]"
          >
            <input
              class="nut-input-text"
              v-model="wishContent.text"
              placeholder="请输入四字祝福"
              type="text"
            />
          </nut-form-item>
          <nut-form-item label="姓名" prop="name">
            <input
              class="nut-input-text"
              v-model="wishContent.name"
              placeholder="可以输入您的姓名"
              type="text"
            />
          </nut-form-item>

          <nut-form-item label="留言" prop="message">
            <nut-textarea
              v-model="wishContent.message"
              limit-show
              max-length="150"
              placeholder="你还可以再说一些悄悄话（仅新郎新娘可见）"
            />
          </nut-form-item>
        </nut-form>

        <nut-button
          class="button"
          shape="square"
          @click="onSubmit"
          block
          type="primary"
          >送上祝福</nut-button
        >
      </nut-cell-group>
    </nut-popup>
  </div>
</template>
<style lang="less">
@message-bg: #9a4445;
.message-wrap {
  position: relative;
  .main-button-wrap {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
  }
  .main-button {
    background-color: @message-bg!important;
  }
  .scroll-view {
    .scroll-content {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: flex-start;
      padding: 40px;
    }
    .scroll-column {
      width: calc(50% - 10px);
      .wish-box-wrap {
        margin-bottom: 50px;
      }
      &:nth-child(2) {
        margin-top: 100px;
      }
    }
  }
  .wish-pop {
    background: red;
  }
  width: 100%;
  height: 100vh;
  background-color: @message-bg;
  box-sizing: border-box;
}
</style>
