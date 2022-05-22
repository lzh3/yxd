<template>
    <div class="wrapper">
        <common-title title='修改密码'></common-title>
        <div class="form-box">
            <el-form ref="form" :rules="rules" :model="form" label-width="80px">
                <el-form-item label="原密码">
                    <el-input v-model="form.old"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input v-model="form.new"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="form.surePassword"></el-input>
                </el-form-item>
            </el-form>
            <div class="btns">
                <el-button type="primary">确认修改</el-button>
                <el-button type="warning">取消</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                old: '',
                new: '',
                surePassword: ''
            },
            rules: {
                old: [
                    { required: true, message: '请输入原密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                new: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度大于5个字符并且小于13个字符', trigger: 'blur' }
                ],
            }
        }
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