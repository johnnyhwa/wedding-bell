import { createApp } from 'vue'
import { Button, Toast } from '@nutui/nutui-taro';
import '@nutui/nutui-taro/dist/style.css';

import './app.less'

const app = createApp({})

app.use(Button).use(Toast)
export default app
