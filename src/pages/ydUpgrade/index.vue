<template>
  <div class="upgrade">
    <common-title :title='commonTitle'></common-title>
    <div class="form">
      <el-form ref="formRef" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="应用名称" prop='app_name'>
          <el-input v-model="form.app_name"></el-input>
        </el-form-item>
        <el-form-item label="线路">
          <el-input v-model="form.line"></el-input>
        </el-form-item>
        <el-form-item label="到期时间" v-if='type!=0'>
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
          <!-- <el-input v-model="form.duration"></el-input>-->
          <el-select v-model="form.duration" placeholder="请选择">
            <el-option v-for="item in monthOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
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
import { YDAPPTITLE, MONTHCOUNT } from '@/utils/enum'
import { createProductAPI, patchProductAPI } from '@/api'

export default {
  data() {
    return {
      form: {
        app_name: '',
        duration: 1,
        group: '',
        type: 1
      },
      rules: {
        app_name: [
          { required: true, message: "请输入应用名称", trigger: "blur" },
        ],
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
      monthOptions: MONTHCOUNT,

      type: 0,
      commonTitle: '套餐升级',
    }
  },
  created() {
    console.log('rioute', this.$route.query)
    this.type = this.$route.query.type;
    this.commonTitle = YDAPPTITLE[this.type]
  },
  methods: {
    // 确认购买
    sureBuy() {
      let api = createProductAPI;
      const { app_name, type, group, duration } = this.form;
      this.$refs['formRef'].validate(async (valid) => {
        if (valid) {
          this.$axios.post(api, {
            "meal_id": type,	//套餐id
            "buy_month": duration,	//购买几个月套餐
            "app_name": app_name
          }).then((res) => {
            if (res.data && res.data.errno === 0) {
              this.$message({
                type: 'success',
                message: '购买成功'
              })
              this.$router.push({
                path: '/admin/yd'
              })
            } else {
              this.$message({
                type: 'error',
                message: '购买失败'
              })
            }
          })

        } else {
          this.$notify.error({
            title: "错误",
            message: "请输入相关信息",
            offset: 100,
          });
          return false;
        }
      });

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