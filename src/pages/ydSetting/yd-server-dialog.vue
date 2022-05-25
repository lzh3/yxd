<template>
    <el-dialog :title="title" :visible.sync="visible" width="60%" :before-close="handleClose">

        <div>
            <el-form ref="form" :model="formData" label-width="80px">
                <el-form-item label="源服务器地址：">
                    <el-input v-model="formData.address"></el-input>
                    <div class="tips-txt">
                        有效的IP地址或域名(不带端口)，例如:61.200.10.121
                        或www.baidu.com
                        请务必使用【阿里云 华东1】云服务器，使用其他服务器的请尽快更换！
                    </div>
                </el-form-item>
                <el-form-item label="源服务器端口：">
                    <el-input type="textarea" v-model="formData.port"></el-input>
                    <div class="tips-txt">
                        您的客户端程序需要连接的服务器端口(或者服务器对外提供服务的端口)，使用英文逗号分隔,
                        比如：8080,8000,18080
                        注：Android和IOS应用的端口号不能小于1024
                    </div>
                </el-form-item>
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="okClick">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '上传'
        }
    },
    data() {
        return {
            formData: {
                address: '',
                port: ''
            },
        }
    },
    methods: {
        handleClose() {
            this.$emit('close', false)
        },
        okClick() {
            this.$emit('okClick', formData)
        }
    }
}
</script>
<style lang="less" scoped>
/deep/.el-form-item__label{
    width: 150px !important;
}
/deep/.el-input{
    width:70%;
}
/deep/.el-textarea{
    width: 70%;
}
.tips-txt{
    font-size: 12px;
    color:#bbb;
    width: 60%;
    line-height: 20px;
    margin-left: 70px;
}
</style>