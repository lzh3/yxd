import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Admin = () => import("@/pages/admin");
const Login = () => import("@/pages/login");
const UserManage = () => import("@/pages/userManage");

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
    redirect: "/admin/user",
    children: [
      {
        path: "/admin/user",
        component: UserManage,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];

export default new VueRouter({
  routes: routes,
});
