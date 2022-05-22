<template>
    <div class="munu-box">
        <el-menu :default-active="defaultActive" style="height: 100%" theme="dark" router ref='menuRef'>
            <el-menu-item index="/admin/home"><i class="el-icon-s-home"></i>首页</el-menu-item>
            <el-menu-item index="/admin/yd"><i class="el-icon-s-platform"></i>云盾应用</el-menu-item>
            <el-submenu index="/admin/payBlock">
                <template slot="title" class="pay-item"><i class="el-icon-postcard"></i>充值付费</template>
                <el-menu-item index="/admin/payBlock/pay">充值</el-menu-item>
                <el-menu-item index="/admin/payBlock/record">充值记录</el-menu-item>
                <el-menu-item index="/admin/payBlock/order">我的订单</el-menu-item>
            </el-submenu>
            <el-submenu index="/admin/userCenter">
                <template slot="title" class="pay-item"><i class="el-icon-user"></i>用户中心</template>
                <el-menu-item index="/admin/userCenter/basic">基本信息</el-menu-item>
                <el-menu-item index="/admin/userCenter/change">修改密码</el-menu-item>
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

                if (route.path.includes('/upgrade')) {
                    this.defaultActive = '/admin/yd'
                }
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
<style lang='less' scoped>
.menu-box {
    height: 100%;
}
.el-menu {
    background-color: #6d7983;
}
.el-submenu {
    text-align: left;
    /* color: #eee !important; */
}
.el-submenu .el-menu li {
    background-color: #6d7983;
    &:hover {
        background-color: #009fd9;
    }
}
/deep/.el-submenu__title {
    color: #eee;
    &:hover {
        background-color: #009fd9;
    }
}
.el-submenu .el-submenu__title i {
    color: #eee !important;
}
/deep/.el-menu-item {
    text-align: left;
    color: #eee;
    &.is-active {
        background-color: #009fd9 !important;
    }
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
