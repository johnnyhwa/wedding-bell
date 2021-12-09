<script lang="ts" setup>
/**
 * @description 祝福box
 * @author huahaoze
 * @date 2021-12-05
 */
import { getShiChen } from "@/hooks/useDate";
const props = withDefaults(
  defineProps<{
    content: string;
    name: string;
    time: number;
    img: string
  }>(),
  {
    name: "陌生人",
    time: new Date().getTime(),
  }
);
</script>
<template>
  <div class="wish-box-wrap">
    <div class="title" v-html="getShiChen(new Date(time))"></div>
    <div class="content-wrap">
      <div class="content content1">
        {{ content[0] + "\n" + content[1] }}
        
      </div>
    <div class="content content2">{{ content[2] + "\n" + content[3] }}</div>
    </div>
    <span class="wish-author">{{ `THE BEST \nWISHES \nFROM \n${name}` }}</span>
    <div class="img-box">
<img :src="img" alt="">
    </div>
    
  </div>
</template>
<style lang="less">
@border-color: #ebbe87;
.wish-box-wrap {
  width: 100%;
  min-height: 50%;
  border: 5px solid @border-color;
  padding: 40px;
  color: @border-color;
  position: relative;
  .content-wrap {
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
  }
  .content {
    text-align: left;
    font-size: 90px;
    white-space: pre-wrap;
    font-weight: bold;
    padding-top: 20px;
    position: relative;
    
    &:nth-child(2) {
      margin-top: 60px;
      margin-right: 20px;
    }
  }
  .img-box{
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid @border-color;
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    & > img {
      border: none;
      display: block;
      margin: 0;
      padding: 0;
      width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid @border-color;
    }
  }
  .wish-author {
    margin-top: 10px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  .title {
    font-size: 33px;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    padding-left: 5px;
    justify-content: space-between;
  }
  .wish-circle-one {
    width: 50%;
    height: 50%;
    border: 3px solid red;
  }
}
</style>
