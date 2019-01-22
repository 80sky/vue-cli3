import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "lib-flexible";
import "vant/lib/index.css";
import APIConfig from "@/server/server-config";
import {
  Button,
  Tabbar,
  TabbarItem,
  Panel,
  Cell,
  CellGroup,
  Row,
  Col
} from "vant";
Vue.use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Panel)
  .use(Cell)
  .use(CellGroup)
  .use(Row)
  .use(Col);
Vue.config.productionTip = false;

let startLoading = e => {};
let finishLoading = e => {};
let errorLoading = e => {};

APIConfig.setRequestPreConfigCallBack(startLoading);

APIConfig.setRequestErrorCallBack(errorLoading);

APIConfig.setResponsePreProcessCallback(finishLoading);

APIConfig.setResponseErrorCallback((status, error) => {
  if (status === 401 || status === 402 || status === 403) {
    router.replace("/login");
  }
  console.log(error);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
