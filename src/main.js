import Vue from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store/index";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import axios from "axios";
Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  let token = localStorage.getItem("token");
  console.log("token", token);
  console.log(from, to);
  if (token) {
    next();
  } else {
    if (to.path !== "/login") {
      ElementUI.Message({
        type: "error",
        message: "请登录！",
      });``
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
