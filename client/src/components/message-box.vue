<script lang='ts' setup>
/**
* @description 模板容器组件
* @author huahaoze
* @date 2021-11-23
*/
</script>
<template>
  <div class='message-box-wrap'>
    <div class="message-box-header">标题标题</div>
    <div class="message-box-body"></div>
    <div class="message-box-dot"></div>
  </div>
</template>
<style lang='less'>
.message-box-header{
  height: 60px;
  width: 100%;
  background: #caf2f9;
  border-bottom: 6px solid #010200;
  line-height: 53px; 
  padding: 0 10px;
  font-size: 32px;
}
.message-box-dot{
  height: 30px;
  width: 30px;
  border: 6px solid #010200;
  background: #e94e4e;
  border-radius: 50%;
  top: 80px;
  right: 15px;
  position: absolute;
}
.message-box-wrap{
  width: 50%;
  border: 6px solid #010200;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  min-height: 400px;
  position: relative;
  box-shadow: 5px 8px 8px #cccccc;
  margin-bottom: 50px;
}
</style>