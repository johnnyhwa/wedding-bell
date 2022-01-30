import Taro, { onAppHide, onAppShow } from "@tarojs/taro";
import lyc from "@/data/lrc";
import Lyric from "lyric-parser";
import { ref } from "vue";
export default function() {
  const text = ref("");
  const playing = ref(false);
  const firstPlay = ref(false);
  const stoped = ref(false);
  let currentLyric = new Lyric(lyc, (payload): void => {
    text.value = payload.txt;
  });
  const init = (autoplay: boolean = false): Taro.InnerAudioContext => {
    let innerAudioContext = Taro.createInnerAudioContext();
    innerAudioContext.autoplay = autoplay;
    innerAudioContext.volume = 0.5;
    innerAudioContext.src =
      "https://wedding-1302676061.cos.ap-shanghai.myqcloud.com/%E5%AE%89%E5%AD%90%E4%B8%8E%E4%B9%9D%E5%A6%B9%20-%20%E5%B0%8F%E5%B7%B7.mp3";
    
    innerAudioContext.onPlay(() => {
      if (stoped.value) {
        stoped.value = false;
        currentLyric = new Lyric(lyc, (payload): void => {
          text.value = payload.txt;
        });
        innerAudioContext.seek(0);
      }

      if (!firstPlay.value) {
        firstPlay.value = true;
        playing.value = true
        currentLyric.play()
        currentLyric.seek(600)
      }
    });

    innerAudioContext.onEnded(() => {
      playing.value = false;
      firstPlay.value = false;
      currentLyric.stop();
      stoped.value = true;
      currentLyric = null;
    });

    return innerAudioContext;
  };
  let innerAudioContext = init(true);

  const pause = () => {
    playing.value = false;
    innerAudioContext.pause();
    currentLyric.togglePlay();
  };

  const play = () => {
    playing.value = true;
    innerAudioContext.play();
    currentLyric.togglePlay();
  };

  onAppHide(() => {
    playing.value = false;
    currentLyric.seek(600)
    currentLyric.stop();
    innerAudioContext.destroy();
  });

  onAppShow(() => {
    innerAudioContext = init(false);
    currentLyric.seek(600)
    pause();
  });

  return {
    text,
    play,
    pause,
    playing,
  };
}
