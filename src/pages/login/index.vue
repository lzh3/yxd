<template>
  <div class="login-wrapper">
    <div class="login_page fillcontain">
      <transition name="form-fade" mode="in-out">
        <section class="form_contianer">
          <div class="manage-title">登录账号</div>
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
            </el-form-item>
            <el-form-item prop="password" class="password-item">
              <p class='forget-btn' @click="handleForget">忘记密码？</p>
              <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
            </el-form-item>
          </el-form>

          <div class="register-link" @click="handleRegister"> 还没有账号？立即注册> </div>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
// import {login, getAdminInfo} from '@/api/getData'
// import {mapActions, mapState} from 'vuex'

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {
    console.log('login页面')
    // if (!this.adminInfo.id) {
    // 	this.getAdminData()
    // }
  },
  computed: {
    // ...mapState(['adminInfo']),
  },
  methods: {
    // ...mapActions(['getAdminData']),
    async submitForm(formName) {
      console.log('this.loginForm', this.loginForm)
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          //   const res = await login({
          //     user_name: this.loginForm.username,
          //     password: this.loginForm.password,
          //   });
          //   if (res.status == 1) {
          //     this.$message({
          //       type: "success",
          //       message: "登录成功",
          //     });
          localStorage.setItem('token', this.loginForm.username)
          this.$router.push("admin");
          //   } else {
          //     this.$message({
          //       type: "error",
          //       message: res.message,
          //     });
          //   }
        } else {
          this.$notify.error({
            title: "错误",
            message: "请输入正确的用户名密码",
            offset: 100,
          });
          return false;
        }
      });
    },
    handleForget() {
      this.$router.push({ path: '/forget' })
    },
    handleRegister() {
      this.$router.push({ path: '/register' })
    }

    // ================
  },
};
</script>

<style scoped>
.login-wrapper {
  width: 100%;
  height: 100vh;
  padding-top: 220px;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, #2a80e6 0%, #15c0f3 100%);
}
.login_page {
  /* background-color: #324057; */
  width: 360px;
  margin: 0 auto;
}
.manage-title {
  font-size: 18px;
  color: #777777;
  text-align: center;
  margin-bottom: 10px;
}
.password-item {
  position: relative;
  margin-top: 30px;
}
.password-item .forget-btn {
  position: absolute;
  height: 20px;
  font-size: 12px;
  color: #337ab7;
  right: 0;
  top: -40px;
  z-index: 99;
  cursor: pointer;
}
.register-link {
  font-size: 16px;
  color: #337ab7;
  /* line-height: 50px; */
  padding-top: 25px;
  border-top: 1px solid #ccc;
  cursor: pointer;
}
.form_contianer {
  /* .wh(320px, 210px);
  .ctp(320px, 210px); */
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
}
.form_contianer .submit_btn {
  width: 100%;
  font-size: 16px;
}
.tip {
  font-size: 12px;
  color: red;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
