<template>
  <div class="login-wrapper">
    <div class="login_page fillcontain">
      <transition name="form-fade" mode="in-out">
        <section class="form_contianer">
          <div class="manage-title">重置密码</div>
          <el-form :rules="rules" ref="loginForm">
            <el-form-item prop="email">
              <el-input v-model="email" placeholder="邮箱"></el-input>
            </el-form-item>

            <el-button type="primary" @click="submitForm" class="submit_btn">发送重置密码邮件</el-button>

          </el-form>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      rules: {
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
      },
    };
  },
  mounted() {
    console.log('forget页面')
  },
  computed: {
    // ...mapState(['adminInfo']),
  },
  methods: {
    // ...mapActions(['getAdminData']),
    async submitForm() {
      if (this.email) {

      }

    },
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
