<script lang="ts" setup>
/**
 * @description 模板容器组件
 * @author huahaoze
 * @date 2021-11-22
 */
import MessageBox from "../../components/message-box.vue";
import Taro from '@tarojs/taro'
import useWeappLifecycle from "@/hooks/useWeappLifecycle";
const {  onReady, weappLifecycle } = useWeappLifecycle();
onReady(() => {
  Taro.nextTick(() => {
      Taro.createSelectorQuery().select('#left')
        .boundingClientRect()
        .exec(res => console.log(res))
    })
});
</script>
<template>
  <view class="index-wrap">
  </view>
</template>
<style lang="less">
.index-wrap {
  width: 100%;
  min-height: 300vh;
  background-color: #9a4445;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  flex-flow: row nowrap;
 /*  background: url(https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/message-bg.png) top center /  100% auto repeat-y; */
  .left-panel {
    margin-right: 30px;
  }
  .left-panel,
  .right-panel {
    flex-grow: 1;
    width: 100%;
  }
}
</style>
