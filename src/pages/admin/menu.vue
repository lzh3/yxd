<template>
    <div class="munu-box">
        <el-menu :default-active="defaultActive" style="height: 100%" theme="dark" router>
            <el-menu-item index="/admin/user"><i class="el-icon-menu"></i>用户管理</el-menu-item>
            <el-menu-item index="/login"><i class="el-icon-menu"></i>业务管理</el-menu-item>
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
    computed: {
        defaultActive: function () {
            return this.$route.path.replace("/admin", "");
        },
    },
};
</script>
<style scoped>
.menu-box {
    height: 100%;
}
</style>
