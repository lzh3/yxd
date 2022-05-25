import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { userinfoAPI } from "@/api";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},
  },
  mutations: {
    saveUserInfo(state, data) {
      state.userInfo = { ...data };
    },
  },
  actions: {
    // 用户信息
    async getUserInfoAction({ commit }) {
      await axios.post(userinfoAPI).then((res) => {
        if (res.data && res.data.errno === 0) {
          // console.log("res.data", res.data);
          localStorage.setItem("userInfo", JSON.stringify(res.data.data));
          commit("saveUserInfo", { ...res.data.data });
        }
      });
    },
  },
});
