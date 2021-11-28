import { reactive } from "vue";

export default function useWeappLifecycle() {
  const weappLifecycle = reactive<{
    onShow: null | (() => void);
    onReady: null | (() => void);
    onHide: null | (() => void);
  }>({
    onShow: null,
    onReady: null,
    onHide: null,
  });
  const onShow = (cb: () => void) => {
    weappLifecycle.onShow = cb;
  };
  const onReady = (cb: () => void) => {
    weappLifecycle.onReady = cb;
  };
  const onHide = (cb: () => void) => {
    weappLifecycle.onHide = cb;
  };
  return { onShow, onReady, onHide, weappLifecycle };
}
