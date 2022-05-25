<template>
    <div class="login-wrapper">
        <div class="login_page fillcontain">
            <transition name="form-fade" mode="in-out">
                <section class="form_contianer">
                    <div class="manage-title">登录账号</div>
                    <el-form :model="loginForm" :rules="rules" ref="loginForm">
                        <el-form-item prop="username" label='电话号码'>
                            <el-input v-model="loginForm.phone" placeholder="请输入电话号码"><span>dsfsf</span></el-input>
                        </el-form-item>
                        <el-form-item prop="password" label='请输入密码' class="password-item">
                            <p class='forget-btn' @click="handleForget">忘记密码？</p>
                            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm" class="submit_btn">登录</el-button>
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
import { loginAPI } from '@/api'

export default {
    data() {
        return {
            loginForm: {
                phone: "",
                password: "",
            },
            rules: {
                phone: [
                    { required: true, message: "请输入电话号码", trigger: "blur" },
                ],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }],
            },
        };
    },
    mounted() {
        console.log('login页面', localStorage.getItem('token'))
        // if (!this.adminInfo.id) {
        // 	this.getAdminData()
        // }
    },
    computed: {
        // ...mapState(['adminInfo']),
    },
    methods: {
        // ...mapActions(['getAdminData']),
        submitForm() {
            this.$refs['loginForm'].validate(async (valid) => {
                if (valid) {
                    this.$axios.post(loginAPI, {
                        phone: this.loginForm.phone,
                        password: this.loginForm.password,
                    }).then(res => {
                        console.log('res.data-login', res.data)
                        if (res && res.data.errno === 0) {
                            localStorage.setItem('token', res.data['user-token'])
                            this.$message({
                                type: "success",
                                message: "登录成功",
                            });
                            this.$router.push({
                                path: "/admin",
                            });
                        }
                    })

                } else {
                    this.$notify.error({
                        title: "错误",
                        message: "请输入正确的用户名和密码",
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
    padding-top: 110px;
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
    margin-top: 20px;
}
.password-item .forget-btn {
    position: absolute;
    height: 20px;
    font-size: 12px;
    color: #337ab7;
    right: 0;
    top: -12px;
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
