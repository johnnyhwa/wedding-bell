import { createApp } from "vue";
import {
  Button,
  Toast,
  Drag,
  Popup,
  Input,
  Icon,
  Radio,
  RadioGroup,
  Form,
  FormItem,
  Cell,
  CellGroup,
  Picker,
  TextArea ,Notify
} from "@nutui/nutui-taro";
import "@nutui/nutui-taro/dist/style.css";
import Taro from "@tarojs/taro";
import "./app.less";
const components = [
  Button,
  Toast,
  Drag,
  Picker,
  Popup,
  Input,
  Icon,
  Radio,
  RadioGroup,
  Form,
  FormItem,
  Cell,
  CellGroup,
  TextArea ,
  Notify
]; 
const app = createApp({
  onShow() {
     Taro.cloud.init({
      env: 'cloud1-5gi4tyqrf96b8e51',
      traceUser: true
    })
  }
});

components.map((c) => app.use(c));
export default app;
