<template>
    <div class="upgrade">
        <common-title :title='commonTitle'></common-title>
        <div class="form">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="应用名称">
                    <el-input v-model="form.app"></el-input>
                </el-form-item>
                <el-form-item label="线路">
                    <el-input v-model="form.line"></el-input>
                </el-form-item>
                <el-form-item label="到期时间">
                    <el-input v-model="form.deadline"></el-input>
                </el-form-item>
                <el-form-item label="套餐选择">
                    <!-- <el-input v-model="form.type"></el-input> -->
                    <el-select v-model="form.type" placeholder="请选择">
                        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="安全组">
                    <!-- <el-input v-model="form.group"></el-input> -->
                    <el-select v-model="form.group" placeholder="请选择">
                        <el-option v-for="item in groupOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="购买时长">
                    <el-input v-model="form.duration"></el-input>
                </el-form-item>
                <el-form-item label="推荐码">
                    <el-input v-model="form.recomendCode"></el-input>
                </el-form-item>
            </el-form>
            <div class="btns">
                <el-button @click="sureBuy" type='primary' size="small">确认购买</el-button>
                <el-button @click='cancel' type='warning' size="small">取消</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                duration: '1个月',
                group: '',
                type: ''
            },
            typeOptions: [
                {
                    label: '套餐一',
                    value: 1,
                },
                {
                    label: '套餐二',
                    value: 2,
                }
            ],
            groupOptions: [
                {
                    label: '安全组一',
                    value: 1,
                }
            ],

            commonTitle: '套餐升级'
        }
    },
    created() {
        console.log('rioute', this.$route.query)
        let type = this.$route.query.type;
        if (type == 1) {
            this.commonTitle = '套餐升级'
        } else {
            this.commonTitle = '套餐续费'
        }
    },
    methods: {
        // 确认购买
        sureBuy() {

        },
        cancel() {
            this.$router.back();
        },
    },
}
</script>
<style lang="less" scoped>
.form {
    width: 500px;
}
/deep/.el-select {
    width: 100%;
}
</style>