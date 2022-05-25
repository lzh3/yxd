import Vue from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store/index";
// 方法
import { dateFormate } from "@/utils/util";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 公共组件
import CommonTitle from "./components/commonTitle";
Vue.component("CommonTitle", CommonTitle);

let token = localStorage.getItem("token");
import axios from "axios";
// axios.defaults.baseURL = "http://api.yldun.com:10089/";
// axios.defaults.baseURL = "152.67.217.198:10089/";
// axios.defaults.headers.common["user-token"] = token;
// axios.defaults.headers.common["content-type"] = "application/json";
axios.interceptors.request.use(
  (config) => {
    // console.log("config", config);
    // 在发送请求前要做的事儿
    config.headers["user-token"] = token;
    config.headers["content-type"] = "application/json";
    return config;
  },
  (err) => {
    // 在请求错误时要做的事儿
    // 该返回的数据则是axios.catch(err)中接收的数据
    return Promise.reject(err);
  }
);
Vue.prototype.$axios = axios;

// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem("token");
//   let path = location.href;
//   if(path.includes('/login')||path.includes('/register')||path.includes('/forget')){
//     next()
//     return;
//   }
//   console.log('出去了')
//   next();
// });

// 全局filter
Vue.filter("dateFormate", dateFormate);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
