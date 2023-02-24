import { createPinia } from 'pinia';
import { createApp } from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import AOS from 'aos';
import 'aos/dist/aos.css';

import CKEditor from '@ckeditor/ckeditor5-vue';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import AllRules from '@vee-validate/rules';
import {
  configure, defineRule, ErrorMessage, Field, Form,
} from 'vee-validate';

import App from '@/App.vue';
import router from '@/router';

import { currency, date } from '@/methods/filters';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale('zh_TW');

const app = createApp(App);
app.config.globalProperties.$filters = {
  date,
  currency,
};

AOS.init();

app
  .use(createPinia())
  .use(router)
  .use(VueAxios, axios)
  .use(CKEditor)
  .component('VueLoading', Loading)
  .component('VForm', Form)
  .component('VField', Field)
  .component('ErrorMessage', ErrorMessage)
  .mount('#app');
