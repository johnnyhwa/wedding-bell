<script lang="ts" setup>
/**
 * @description 模板容器组件
 * @author huahaoze
 * @date 2022-01-10
 */
import { computed } from "vue";
import useAudio from "@/hooks/useAudio";
const { text } = useAudio();
const textArr = computed(() => text.value.split(" "));
</script>
<template>
  <transition name="fade" mode="out-in" appear>
    <div v-if="text" class="lyric-play" :key="text">
      {{ textArr.join("\n") }}
    </div>
  </transition>
</template>
<style lang="less">
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: opacity 0.5s ease;
}
@keyframes fade {
  from {
    opacity: 0;
    transform: translateX(5px);
  }
  to {
    opacity: 0.6;
    transform: translateX(0);

  }
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
.lyric-play {
  animation: fade .8s ease-in-out;
  font-size: 66px;
  font-weight: bold;
  writing-mode: vertical-rl;
  white-space: pre-wrap;
  text-align: start;
  letter-spacing: 5px;
  color: #FFFFFF;
  opacity: 0.6;
}
</style>
