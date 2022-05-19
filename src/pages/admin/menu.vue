<template>
  <div class="munu-box">
    <el-menu :default-active="defaultActive" style="height: 100%" theme="dark" router ref='menuRef'>
      <el-menu-item index="/admin/home"><i class="el-icon-s-home"></i>首页</el-menu-item>
      <el-menu-item index="/admin/yd"><i class="el-icon-s-platform"></i>云盾应用</el-menu-item>
      <el-submenu index="/payBlock">
        <el-menu-item index="/payBlock/">商家列表</el-menu-item>
        <el-menu-item index="foodList">食品列表</el-menu-item>
        <el-menu-item index="orderList">订单列表</el-menu-item>
      </el-submenu>

      <!-- <el-submenu index="2">
                <template slot="title"><i class="el-icon-document"></i>数据管理</template>
                <el-menu-item index="userList">用户列表</el-menu-item>
                <el-menu-item index="shopList">商家列表</el-menu-item>
                <el-menu-item index="foodList">食品列表</el-menu-item>
                <el-menu-item index="orderList">订单列表</el-menu-item>
                <el-menu-item index="adminList">管理员列表</el-menu-item>
            </el-submenu> -->
    </el-menu>
  </div>
</template>
<script>
export default {
  watch: {
    //   监听路由状态并用ref直接改变activeIndex
    $route: {
      handler(route) {
        //   console.log('route', route)
        this.defaultActive = route.path
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      defaultActive: '/admin/home'
    }
  },
};
</script>
<style scoped>
.menu-box {
  height: 100%;
}
.el-menu {
  background-color: #6d7983;
}
.el-menu-item {
  text-align: left;
  color: #eee;
}
.el-menu-item i {
  color: #eee;
}
.el-menu-item.is-active {
  background-color: #009fd9;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #009fd9;
}
</style>
