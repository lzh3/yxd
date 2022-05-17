<template>
    <div class="hello">
        <el-container>
            <el-aside width="200px">
                <MenuComponent></MenuComponent>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <!-- <el-footer>Footer</el-footer> -->
            </el-container>
        </el-container>
    </div>
</template>

<script>
import MenuComponent from './menu.vue'

export default {
    name: "Admin",
    props: {},
    components: {
        MenuComponent
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
    padding: 0;
}

.el-container {
    height: 100vh;
    /* margin-bottom: 40px; */
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
