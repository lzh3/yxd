<template>
    <div class="reg-wrapper">
        <div class="reg_page fillcontain">
            <transition name="form-fade" mode="in-out">
                <section class="form_contianer">
                    <div class="manage-title">注册账号</div>
                    <el-form :model="loginForm" :rules="rules" ref="loginForm">
                        <el-form-item prop="user_name" label='用户名'>
                            <el-input v-model="loginForm.user_name" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="email" label="邮箱">
                            <el-input v-model="loginForm.mail" placeholder="请输入邮箱"></el-input>
                        </el-form-item>
                        <!-- <el-form-item prop="id" label='身份证'>
                            <el-input v-model="loginForm.id" placeholder="请输入身份证"></el-input>
                        </el-form-item> -->
                        <el-form-item prop="phone" label='手机号'>
                            <el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item prop="QQ" label='QQ'>
                            <el-input v-model="loginForm.qq" placeholder="请输入qq"></el-input>
                        </el-form-item>
                        <el-form-item prop="msg_code" label='验证码'>
                            <el-input v-model="loginForm.msg_code" placeholder="验证码">
                                <el-button slot="append" v-if='showCodeBtn' @click="sendCode">发送验证码</el-button>
                                <el-button slot="append" v-else>{{time}}</el-button>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password" class="password-item" label='密码'>
                            <el-input auto-complete="new-password" type="password" placeholder="请输入密码" v-model="loginForm.password">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password" class="password-item" label="确认密码">
                            <el-input type="password" placeholder="重复密码" v-model="loginForm.repassword"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm()" class="submit_btn">注册</el-button>
                        </el-form-item>
                    </el-form>
                    <div>
                        <el-link type='primary' @click="toLogin">已有账号，去登录</el-link>
                    </div>
                </section>
            </transition>
        </div>
    </div>
</template>

<script>
// import {login, getAdminInfo} from '@/api/getData'
// import {mapActions, mapState} from 'vuex'
import { sendCodeAPI, registerAPI } from '@/api'

export default {
    data() {
        return {
            loginForm: {
                user_name: "lzh",
                password: "123456",
                mail: '1341746911@qq.com',
                // id: '',
                qq: '1341746911',
                phone: '18270825622',
                // agency_code: ''
                msg_code: '3306',
                repassword: '123456',
                agency_code: "abcdadsew",
            },
            rules: {
                user_name: [
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
            // 验证码
            showCodeBtn: true,
            time: 60,
            timer: null,
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
        toLogin() {
            this.$router.push({
                path: '/login'
            })
        },
        // ...mapActions(['getAdminData']),
        async submitForm() {
            console.log('this.loginForm', this.loginForm)
            console.log('api==', registerAPI)
            // let regExp = new RegExp("^1[3578]\\d{9}$");
            const { repassword, password } = this.loginForm
            if (repassword !== password) {
                this.$message({
                    title: "error",
                    message: "请输入相同的密码",
                });
                return
            }
            let filter = { ...this.loginForm }
            delete filter.repassword
            this.$axios.post(registerAPI, {
                ...filter
            }).then(res => {
                console.log('注册', res)
                if (res.data && res.data.errno === 0) {
                    this.$message({
                        type: 'success',
                        message: '注册成功'
                    })
                    this.$router.push({
                        path: '/login'
                    })
                }
            })

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
        // 验证码
        sendCode() {
            if (!this.loginForm.phone) {
                this.$message({
                    type: 'error',
                    message: '请输入手机号'
                })
                return;
            }

            this.minusTime();
            // this.$axios.post(sendCodeAPI, {
            //     phone: this.loginForm.phone
            // }).then(res => {
            //     console.log('验证码', res)
            // })
        },
        // 倒计时
        minusTime() {
            this.showCodeBtn = false;
            this.timer = setInterval(() => {
                if (this.time > 0) {
                    this.time--;
                } else {
                    clearInterval(this.timer)
                }
            }, 1000)
        },

        // ================
    },
};
</script>

<style scoped>
.reg-wrapper {
    width: 100%;
    /* height: 100vh; */
    padding-top: 50px;
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
