import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Admin = () => import("@/pages/admin");
const Login = () => import("@/pages/login");
const ForgetPassword = () => import("@/pages/forgetPassword");
const Register = () => import("@/pages/register");

const Home  = ()=>import("@/pages/home");
const ydApp = () => import("@/pages/ydApp");
const Pay = () => import("@/pages/payBlock/pay");


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
        redirect: '/admin/payBlock/pay',
        children:[
          {
            path: '/pay',
            component: Pay,
          },
          {
            path: '/payRecord'
          },
          {
            path: '/payOrder',
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
