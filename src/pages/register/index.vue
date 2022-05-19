<template>
  <div class="reg-wrapper">
    <div class="reg_page fillcontain">
      <transition name="form-fade" mode="in-out">
        <section class="form_contianer">
          <div class="manage-title">注册账号</div>
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="loginForm.email" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="loginForm.email" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item prop="id">
              <el-input v-model="loginForm.id" placeholder="身份证"></el-input>
            </el-form-item>
            <el-form-item prop="password" class="password-item">
              <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item prop="password" class="password-item">
              <el-input type="password" placeholder="重复密码" v-model="loginForm.repassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()" class="submit_btn">注册</el-button>
            </el-form-item>
          </el-form>
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
        email: '',
        id: '',
        phone: '',
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: '密码长度必须大于6', trigger: 'blur' }
        ],
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
      const { repassword, password } = this.loginForm
      if (repassword !== password) {
        this.$message({
          title: "error",
          message: "请输入相同的密码",
        });
        return
      }
      this.$refs['loginForm'].validate(async (valid) => {
        if (valid) {

        } else {
          //   this.$notify.error({
          //     title: "错误",
          //     message: "请输入正确的用户名密码",
          //     offset: 100,
          //   });
          return false;
        }
      });
    },

    // ================
  },
};
</script>

<style scoped>
.reg-wrapper {
  width: 100%;
  height: 100vh;
  padding-top: 220px;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, #2a80e6 0%, #15c0f3 100%);
}
.reg_page {
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
