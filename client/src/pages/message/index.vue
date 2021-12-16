<script lang="ts" setup>
/**
 * @description 祝福容器
 * @author huahaoze
 * @date 2021-12-13
 */
import Wish from "./Wish.vue";
import FakeWish from "./fake-wish.vue";
import { onBeforeMount, ref } from "vue";
import Taro from "@tarojs/taro";
const show = ref(false);
onBeforeMount(() => {
  const db = Taro.cloud.database();
  db.collection("jojo")
    .where({ jojo: true })
    .get()
    .then(() => {
      show.value = true;
    })
    .catch(() => {
      show.value = false;
    });
});
</script>
<template>
  <FakeWish v-if="!show"></FakeWish>
  <Wish v-else></Wish>
</template>
<style lang="less"></style>
