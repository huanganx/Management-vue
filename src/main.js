import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Icon,
  Layout,
  Drawer,
  Radio,
  Divider,
  Menu,
  Card,
  Form,
  Input,
  Checkbox,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";
import VueI18n from "vue-i18n";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import queryString from "query-string";

Vue.config.productionTip = false;

// Ant Design Vue 组件
Vue.use(Button);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Divider);
Vue.use(Menu);
Vue.use(Card);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
// 权限组件
Vue.component("Authorized", Authorized);
// 权限指令
Vue.use(Auth);

// 国际化
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS }
  }
});

// 自定义图标
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1647242_fvlle3tn6r6.js" // 在 iconfont.cn 上生成
});
Vue.component("IconFont", IconFont);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
