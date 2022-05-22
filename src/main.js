import Vue from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store/index";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 公共组件
import CommonTitle from "./components/commonTitle";
Vue.component("CommonTitle", CommonTitle);

let token = localStorage.getItem("token");
import axios from "axios";
axios.defaults.baseURL = "http://api.yldun.com:10089/";
axios.defaults.headers.common["token"] = token;

Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  console.log("token", token);
  console.log(from, to);
  if (token) {
    next();
  } else {
    if (to.path === "/forget" || to.path === "/register") {
      next();
      return;
    }
    if (to.path !== "/login") {
      ElementUI.Message({
        type: "error",
        message: "请登录！",
      });
      ``;
      router.push({
        path: "login",
      });
    }
    next();
  }
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
