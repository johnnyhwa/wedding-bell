<script lang="ts" setup>
/**
 * @description 模板容器组件
 * @author huahaoze
 * @date 2021-12-16
 */
</script>
<template>
  <div class="wish-wrap">
    平安喜乐
    <img
      src="https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/hug.png"
      alt=""
    />
  </div>
</template>
<style lang="less">
.wish-wrap {
  text-align: center;
  line-height: 100vh;
  height: 100vh;
  width: 100%;
  background-color: #9a4445;
  font-size: 100px;
  font-weight: bold;
  color: #ebbe87;
  & > img {
    position: absolute;
    height: 300px;
    width: 200px;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
