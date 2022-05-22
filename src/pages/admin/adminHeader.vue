<template>
    <header>
        <div class="header">
            <div class="logo"></div>
            <div class="userblock">
                <i class="icon el-icon-warning-outline"></i>
                <el-dropdown @command="loginOut">
                    <span class="el-dropdown-link">
                        王五<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>退出</el-dropdown-item>
                        <!-- <el-dropdown-item>狮子头</el-dropdown-item> -->
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        loginOut() {
            localStorage.clear();
            this.$router.push('/login')
        }
    },
}
</script>
<style lang="less" scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    color: #fff;
}
.logo {
    width: 120px;
    height: 60px;
    border: 2px solid #ccc;
    box-sizing: border-box;
}
.userblock {
    // line-height: 60px;
    padding-top: 17px;
    .icon {
        margin-right: 12px;
    }
    /deep/.el-dropdown {
        color: #fff;
    }
}
</style>