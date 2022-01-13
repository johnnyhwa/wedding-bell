import Taro from "@tarojs/taro";
import lyc from "@/data/lrc";
import Lyric from "lyric-parser";
import { ref } from "vue";
export default function() {
  const text = ref("");
  const handleLyric = (payload): void => {
    text.value = payload.txt;
  };
  const playing = ref(false);
  const currentLyric = new Lyric(lyc, handleLyric);
  const firstPlay = ref(true);
  const pause = () => {
    innerAudioContext.pause();
  };

  const play = () => {
    innerAudioContext.play();
  };

  const innerAudioContext = Taro.createInnerAudioContext();
  innerAudioContext.autoplay = true;
  innerAudioContext.volume = 0.5;
  innerAudioContext.src =
    "https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/%E5%AE%89%E5%AD%90%E4%B8%8E%E4%B9%9D%E5%A6%B9%20-%20%E5%B0%8F%E5%B7%B7.mp3";

  innerAudioContext.onPlay(() => {
    playing.value = true;
    currentLyric.togglePlay();
    if (firstPlay.value) {
      firstPlay.value = false;
      currentLyric.seek(400);
    }
  });

  innerAudioContext.onStop(() => {
    playing.value = false;
    currentLyric.stop();
  });

  innerAudioContext.onPause(() => {
    playing.value = false;
    currentLyric.togglePlay();
  });

  const pausePlay = () => {
    innerAudioContext.pause();
  };

  return {
    pausePlay,
    text,
    play,
    pause,
    playing,
  };
}