import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Admin = () => import("@/pages/admin");
const Login = () => import("@/pages/login");
const ForgetPassword = () => import("@/pages/forgetPassword");
const Register = () => import("@/pages/register");

const Home  = ()=>import("@/pages/home");
const ydApp = () => import("@/pages/ydApp");
const PayBlock = () => import("@/pages/payBlock");
const Pay = () => import("@/pages/payBlock/pay");
const PayRecord = () => import("@/pages/payBlock/record");
const PayOrder = () => import("@/pages/payBlock/order");


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
    redirect: "/admin/yd",
    children: [
      {
        path: "/admin/yd",
        component: ydApp,
      },
      {
        path: "/admin/home",
        component: Home,
      },
      {
        path: '/admin/payBlock',
        component: PayBlock,
        // redirect: '/admin/payBlock/pay',
        children:[
          {
            path: '/admin/payBlock/pay',
            component: Pay,
          },
          {
            path: '/admin/payBlock/record',
            component: PayRecord,
          },
          {
            path: '/admin/payBlock/order',
            component: PayOrder,
          }
        ],
      }
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: '/forget',
    component: ForgetPassword
  },
  {
    path: '/register',
    component: Register
  }
];

export default new VueRouter({
  routes: routes,
});
