import { createApp } from 'vue'
import { Button, Toast } from '@nutui/nutui-taro';
import '@nutui/nutui-taro/dist/style.css';

import './app.less'

const app = createApp({})

app.use(Button).use(Toast)
app.mixin({
  onShow() {
    if (this.weappLifecycle && this.weappLifecycle.onShow) {
      this.weappLifecycle.onShow();
    }
  },
  onReady() {
    if (this.weappLifecycle && this.weappLifecycle.onReady) {
      this.weappLifecycle.onReady();
    }
  },
});

export default app
