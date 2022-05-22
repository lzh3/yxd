<template>
    <div class="wrapper">
        <common-title title='个人信息'></common-title>
        <div class="form-box">
            <div class="info-title">
                liuzhihui2424
            </div>
            <el-row :gutter="20">
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        性别：男
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        年龄：25
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        邮箱：12323434@qq.com
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        手机号：233445
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        qq:3435242477
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        余额：233
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        注册时间：2022-01-20
                    </div>
                </el-col>
            </el-row>

        </div>
    </div>
</template> 
<script>
export default {
    data() {
        return {
        }
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
    }
}
</style>