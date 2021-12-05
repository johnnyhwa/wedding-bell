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
  }>(),
  {
    name: "陌生人",
    time: new Date().getTime(),
  }
);
</script>
<template>
  <div class="wish-box-wrap">
    <div class="title">{{ getShiChen(new Date(time)) }}</div>
    <div class="content-wrap">
      <div class="content content1">
        {{ content[0] + "\n" + content[1] }}
        <span>{{ `THE BEST \nWISHES \nFROM \n${name}` }}</span>
      </div>
      <div class="content content2">{{ content[2] + "\n" + content[3] }}</div>
    </div>
  </div>
</template>
<style lang="less">
@border-color: #ebbe87;
.wish-box-wrap {
  width: 100%;
  height: 450px;
  border: 5px solid @border-color;
  padding: 40px;
  color: @border-color;
  overflow: hidden;
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
    & > span {
      font-size: 15px;
      font-weight: normal;
      text-align: left;
      position: absolute;
      bottom: -15px;
      left: 5px;
      max-width: 90px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &:nth-child(2) {
      margin-top: 60px;
      margin-right: 20px;
    }
  }
  .title {
    font-size: 33px;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    padding-left: 5px;
  }
  .wish-circle-one {
    width: 50%;
    height: 50%;
    border: 3px solid red;
  }
}
</style>
