<script lang="ts" setup>
/**
 * @description 入口
 * @author huahaoze
 * @date 2021-11-22
 */
import Taro from "@tarojs/taro";
import Lyric from "@/components/lyric.vue";
import useAudio from "@/hooks/useAudio";

Taro.showShareMenu({
  withShareTicket: true,
});
const { text, playing, pause, play } = useAudio();
</script>
<template>
  <div class="cover-bg">
    <Lyric class="lyric" :text="text">
      <div class="button music" :class="{ rotate: playing }"></div>
      <div v-if="playing" class="button" @click="pause"></div>
      <div v-else class="button pause" @click="play"></div>
    </Lyric>
    <div class="bg-wrap"></div>
    <div class="cloud1"></div>
    <div class="cloud2"></div>
    <div class="circle-container" v-for="i in 15" :key="i">
      <div class="circle"></div>
    </div>
  </div>
  <div class="block"></div>
  <div class="photo1"></div>
  <div class="photo2"></div>
</template>
<style lang="scss">
.circle-container {
  $particleNum: 20;
  position: absolute;
  transform: translateY(-10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: 10;
  .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    mix-blend-mode: screen;
    background: url("../../img/fly.png") top center / 100% 100% no-repeat;

    animation: fadein-frames 200ms infinite, scale-frames 2s infinite;

    @keyframes fade-frames {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0.7;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes scale-frames {
      0% {
        transform: scale3d(0.8, 0.8, 1);
      }

      50% {
        transform: scale3d(2.1, 2.1, 1);
      }

      100% {
        transform: scale3d(0.8, 0.8, 1);
      }
    }
  }

  $particleBaseSize: 10;

  @for $i from 1 through $particleNum {
    &:nth-child(1) {
      animation-delay: 0ms !important;
    }
    &:nth-child(#{$i}) {
      $circleSize: random($particleBaseSize) + 10;
      width: $circleSize + px;
      height: $circleSize + px;

      $startPositionY: random(10) + 100;
      $framesName: "move-frames-" + $i;
      $moveDuration: 28000 + random(9000) + ms;

      animation-name: #{$framesName};
      animation-duration: $moveDuration;
      animation-delay: random(37000) + ms;

      @keyframes #{$framesName} {
        from {
          transform: translate3d(
            #{random(100) + vw},
            #{$startPositionY + vh},
            0
          );
        }

        to {
          transform: translate3d(
            #{random(100) + vw},
            #{- $startPositionY - random(30) + vh},
            0
          );
        }
      }

      .circle {
        animation-delay: random(4000) + ms;
      }
    }
  }
}
</style>
<style lang="less">
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.cover-bg {
  background: rgba(194, 235, 253, 0.6);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .button {
    height: 6vw;
    width: 6vw;
    position: absolute;
    font-size: 66px;
    right: 10px;
    top: -3em;
    z-index: 99;

    background: url(../../img/play.svg) top center / 100% 100% no-repeat;
    &.music {
      position: relative;
      &.rotate {
        animation: rotate 7s infinite linear;
      }
      right: 4vw;
      top: 100px;
      background: url(../../img/music.svg) top center / 100% 100% no-repeat;
    }
    &.pause {
      background: url(../../img/stop.svg) top center / 100% 100% no-repeat;
    }
  }
  .bg-wrap {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100vh;

    background: url("https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/bg1.png")
      top center / auto 100% no-repeat;
  }
  @keyframes cloudmoveRight {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
  @keyframes cloudmoveLeft {
    from {
      transform: translateX(50%);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .cloud1 {
    animation: cloudmoveRight 10s linear infinite;
    position: absolute;
    left: 0;
    z-index: 2;
    width: 100%;
    top: 80px;
    height: 50px;
    background: url("https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/cloud1.png")
      top left / auto 100% no-repeat;
  }
  .cloud2 {
    animation: cloudmoveLeft 12s linear infinite;
    position: absolute;
    right: 0;
    top: 30px;
    z-index: 2;
    width: 100%;
    height: 50px;
    background: url("https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/cloud2.png")
      top right / auto 100% no-repeat;
  }
  width: 100%;
  height: 100vh;
  position: relative;
}
.lyric {
  position: absolute;
  right: 5vh;
  top: 10vh;
  z-index: 9;
  height: 90vh;
}
.block {
  width: 100%;
  height: 100vh;
  background: url("https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/bg2.png")
    top center / auto 100% no-repeat;
}
.photo1 {
  width: 100%;
  height: 100vh;

  background: url("https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/bg3.png")
    top center / auto 100% no-repeat;
}
.photo2 {
  width: 100%;
  height: 100vh;

  background: url("https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/bg4.png")
    top center / auto 100% no-repeat;
}
</style>
