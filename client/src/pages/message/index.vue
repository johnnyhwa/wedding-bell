<script lang='ts' setup>
/**
* @description 模板容器组件
* @author huahaoze
* @date 2021-11-22
*/
import MessageBox from '../../components/message-box.vue';
</script> 
<template>
  <view class='index-wrap'>
    <message-box></message-box>
    <message-box></message-box>
    <message-box></message-box>
    <message-box></message-box>
    <message-box></message-box>
  </view>
</template>
<style lang='less'>
.index-wrap{
  width: 100%; 
  background-color: #fffbec;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  flex-flow: row wrap;
}
</style>