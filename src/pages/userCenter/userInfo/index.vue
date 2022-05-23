<template>
    <div class="wrapper">
        <common-title title='个人信息'></common-title>
        <div class="form-box">
            <div class="info-title">
                <span v-if='!isChange'>{{userinfo.user_name}}</span>
                <el-input size="small" v-else class="info-item" v-model="userinfo.user_name" placeholder="请输入"></el-input>
            </div>
            <el-row :gutter="20">
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <span>性别：</span>
                        <span>--</span>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <span>年龄：</span>
                        <span>--</span>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <span>身份证：</span><span>{{userinfo.id_number || '--'}}</span>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        邮箱：<span v-if='!isChange'>{{userinfo.mail || '--'}}</span>
                        <el-input size="small" v-else class="info-item" v-model="userinfo.mail" placeholder="请输入邮箱"></el-input>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        手机号：<span>{{userinfo.phone}}</span>
                        <!-- <el-input size="small" v-else class="info-item" v-model="userinfo.phone" placeholder="请输入手机号"></el-input> -->
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <span>qq:</span>
                        <span v-if='!isChange'>{{userinfo.qq}}</span>
                        <el-input size="small" v-else class="info-item" v-model="userinfo.qq" placeholder="请输入qq"></el-input>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <span>余额：</span>
                        <span>{{userinfo.cash}}</span>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <span>注册时间：</span>
                        <span>{{userinfo.created_at | dateFormate}}</span>
                    </div>
                </el-col>
            </el-row>
            <div class="btns">
                <el-button v-if='!isChange' type='primary' size="small" @click="handleChange">修改</el-button>
                <el-button v-else type='primary' size="small" @click="handleSure">确认</el-button>

            </div>
        </div>
    </div>
</template> 
<script>
import { changePasswordAPI } from '@/api'

export default {
    data() {
        return {
            userinfo: {},
            isChange: false,
            // newInfo: {},
        }
    },
    mounted() {
        this.handleUserInfo();
        console.log('userinfo===', this.$store.state.userInfo)
        // console.log('userinfo---', localStorage.getItem('userInfo'))
        // localStorage.getItem('userInfo')
    },
    methods: {
        handleUserInfo() {
            this.userinfo = this.$store.state.userInfo;
        },
        // 修改
        handleChange() {
            this.isChange = true;
        },
        // 确认修改
        handleSure() {
            this.$axios.post(changePasswordAPI, {
                "mail": this.userinfo.mail,
                "qq": this.userinfo.qq,
                "user_name": this.userinfo.user_name
            }).then(res => {
                this.isChange = false;
                if (res && res.data && res.data.errno === 0) {
                    console.log('res', res.data)
                }
            })
        },
    }
}
</script>
<style lang="less" scoped>
.info-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #f5f6fa;
}
.form-box {
    width: 500px;
    margin: 30px auto;
    // text-align: center;
    // display: flex;
    // justify-content: space-between;
    .grid-content {
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        width: 380px;
        border-bottom: 1px solid #ccc;
    }
}
/deep/.info-item {
    width: 200px;
}
.btns {
    margin-top: 10px;
}
</style>