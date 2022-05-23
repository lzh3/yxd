<template>
    <div class="wrapper">
        <common-title title='修改密码'></common-title>
        <div class="form-box">
            <el-form ref="passwordForm" :rules="rules" :model="form" label-width="80px">
                <el-form-item label="原密码" prop="old_password">
                    <el-input v-model="form.old_password"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="new_password">
                    <el-input type='password' auto-complete="new-password" v-model="form.new_password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input auto-complete="new-password" type="password" v-model="form.surePassword"></el-input>
                </el-form-item>
            </el-form>
            <div class="btns">
                <el-button type="primary" @click="handleSure">确认修改</el-button>
                <!-- <el-button type="warning">取消</el-button> -->
            </div>
        </div>
    </div>
</template>
<script>
import { changePasswordAPI } from '@/api'

export default {
    data() {
        return {
            form: {
                old_password: '',
                new_password: '',
                surePassword: ''
            },
            rules: {
                old_password: [
                    { required: true, message: '请输入原密码', trigger: 'blur' },
                ],
                new_password: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度大于5个字符并且小于13个字符', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        handleSure() {
            this.$refs['passwordForm'].validate(async (valid) => {
                if (valid) {
                    if (this.form.new_password !== this.form.surePassword) {
                        this.me$message({
                            type: 'error',
                            message: '两次输入的密码不一样'
                        })
                    }
                    this.$axios.post(changePasswordAPI, {
                        old_password: this.form.old_password,
                        new_password: this.form.new_password
                    }).then(res => {
                        if (res.data && res.data.errno === 0) {
                            this.$message({
                                type: 'success',
                                message: '修改成功，请重新登录'
                            })
                            localStorage.clear()
                            this.$router.push({
                                path: '/login',
                            })
                        }
                    })
                } else {
                    this.$notify.error({
                        title: "错误",
                        message: "请输入正确的密码",
                        offset: 100,
                    });
                    return false;
                }
            });
        },
    }
}
</script>
<style lang="less" scoped>
.form-box {
    width: 400px;
    margin: 30px auto;
}
.btns {
    text-align: right;
}
</style>