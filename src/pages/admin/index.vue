<template>
  <div class="hello">
    <el-container>
      <el-header>
        <admin-header></admin-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <MenuComponent></MenuComponent>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MenuComponent from './menu.vue'
import AdminHeader from './adminHeader.vue'

export default {
  name: "Admin",
  props: {},
  components: {
    MenuComponent,
    AdminHeader,
  },
  data() {
    return {};
  },
  async created() {
    // getUserInfoAction
    await this.$store.dispatch('getUserInfoAction')
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (!token) {
      this.$router.replace({
        path: "/login",
      });
      this.$message({
        type: "error",
        message: "请登录！",
      });
    }
  }
}
</script>

<style scoped>
.el-header {
  /* background-color: #6d7983;*/
  background: rgba(3, 169, 244, 1);
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #6d7983; */
  background: rgba(3, 169, 244, 1);
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #fff;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
  padding: 20px;
}
.el-container {
  min-height: calc(100vh - 60px);
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
