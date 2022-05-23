import Vue from "vue";
import VueRouter from "vue-router";

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => err);
// };
Vue.use(VueRouter);

const Admin = () => import("@/pages/admin");
const Login = () => import("@/pages/login");
const ForgetPassword = () => import("@/pages/forgetPassword");
const Register = () => import("@/pages/register");

const Home = () => import("@/pages/home");
const ydApp = () => import("@/pages/ydApp");
// 云盾应用 配置
const ydSetting = () => import("@/pages/ydSetting");
// 升级
const ydUpgrade = () => import("@/pages/ydUpgrade");
// 充值付费
const PayBlock = () => import("@/pages/payBlock");
const Pay = () => import("@/pages/payBlock/pay");
const PayRecord = () => import("@/pages/payBlock/record");
const PayOrder = () => import("@/pages/payBlock/order");
// 用户中心
const UserCenter = () => import("@/pages/userCenter");
const UserChange = () => import("@/pages/userCenter/changePassword");
const UserInfo = () => import("@/pages/userCenter/userInfo");

export const routes = [
  {
    path: "/",
    // component: Admin,
    redirect: "/admin",
    // children: [],
  },
  {
    path: "/admin",
    component: Admin,
    redirect: "/admin/home",
    children: [
      {
        path: "/admin/yd",
        component: ydApp,
      },
      {
        path: "/admin/setting",
        component: ydSetting,
      },
      {
        path: "/admin/upgrade",
        component: ydUpgrade,
      },
      {
        path: "/admin/home",
        component: Home,
      },
      {
        path: "/admin/payBlock",
        component: PayBlock,
        // redirect: '/admin/payBlock/pay',
        children: [
          {
            path: "/admin/payBlock/pay",
            component: Pay,
          },
          {
            path: "/admin/payBlock/record",
            component: PayRecord,
          },
          {
            path: "/admin/payBlock/order",
            component: PayOrder,
          },
        ],
      },
      {
        path: "/admin/userCenter",
        component: UserCenter,
        children: [
          {
            path: "/admin/UserCenter/change",
            component: UserChange,
          },
          {
            path: "/admin/UserCenter/basic",
            component: UserInfo,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/forget",
    component: ForgetPassword,
  },
  {
    path: "/register",
    component: Register,
  },
];

export default new VueRouter({
  routes: routes,
});
