<script lang="ts" setup>
/**
 * @description 模板容器组件
 * @author huahaoze
 * @date 2022-01-10
 */
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    text: string;
  }>(),
  {}
);
const textArr = computed(() => props.text.split(" "));
</script>
<template>
    <transition name="fade" mode="out-in" appear>
      <div v-if="text" class="lyric-play" :key="text">
        {{ textArr.join("\n") }}
        <slot></slot>
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
.lyric-wrap{
  position: relative;
}
.lyric-play {
  animation: fade 0.8s ease-in-out;
  font-size: 66px;
  font-weight: bold;
  writing-mode: vertical-rl;
  white-space: pre-wrap;
  text-align: start;
  letter-spacing: 5px;
  color: #ffffff;
  opacity: 0.6;
  text-indent: -2em;
  margin-top: 2em;
  position: relative;
}
</style>
