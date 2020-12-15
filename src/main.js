import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import axios from "axios";
import Vant from 'vant';
import 'vant/lib/index.css';
import { Tab,Tabs } from 'vant';









Vue.prototype.$http = axios;
Vue.use(Tab).use(Tabs);
Vue.config.productionTip = false;
Vue.use(Vant);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
