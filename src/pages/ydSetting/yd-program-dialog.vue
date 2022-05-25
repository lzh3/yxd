<template>
  <el-dialog :title="title" :visible.sync="visible" width="60%" :before-close="handleClose">

    <div>
      <el-form ref="form" :model="formData" label-width="80px">
        <el-form-item label="程序名称：">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="封装模式：">
          <!-- <el-input type="textarea" v-model="formData.model"></el-input> -->
          <el-radio v-model="formData.model" label="1">备选项</el-radio>
          <el-radio v-model="formData.model" label="2">备选项</el-radio>
          <div class="tips-txt">
            模式一：有启动画面 <br />
            模式二：无启动画面
          </div>
        </el-form-item>
        <el-form-item label="文件路径：">
          <!-- <el-input disabled v-model="formData.file"></el-input> -->
          <!-- <el-button type='primary' size='small'>请选择文件</el-button> -->
          <!--  :action="uploadFileAPI" -->
          <!-- <el-upload class="upload-demo" :on-change="handleUploadChange" >
                        <el-button size="small" type="primary">请选择文件</el-button>
                    </el-upload> -->
          <div class="content">
            <label class="btn-upload color-comein">选择文件
              <input type="file" class="upload" ref="file" :accept="accept" size="medium" @change="getFile" />
              <!-- <div class="import-select__name" :class="{'fileColor': file.name}">
                {{ file.name || '请选择'}}
              </div> -->
            </label>
            <div class="import-select__name" :class="{'fileColor': file.name}">
                {{ file.name}}
              </div>
            <i class="el-icon-close  closebtn" v-show="file.name" @click="removeFile"></i>
            <el-button class="upload-add-btn" size="small" @click="selectFile"><i class="iconfont icon-add"></i>上传文件</el-button>
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
import { uploadFileAPI } from "@/api"

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
        file: '',
        name: '',
        model: ''
      },
      file: {
        name: ''
      },
      accept: '.exe',
      //   uploadFileAPI,
    }
  },
  methods: {
    handleUploadChange(file, fileList) {
      console.log('file', file, fileList)
    },
    handleClose() {
      this.$emit('close', false)
    },
    okClick() {
      this.$emit('okClick', formData)
    },
    getFile(){
        this.file = this.$refs.file.files[0];
        console.log('file', this.$refs.file.files[0])
    },
    selectFile() {
      this.$refs.file.click();
    },
    removeFile() {
      this.file = {}
    },
  }
}
</script>
<style lang="less" scoped>
/deep/.el-form-item__label {
  width: 150px !important;
}
/deep/.el-input {
  width: 70%;
}
/deep/.el-textarea {
  width: 70%;
}
.tips-txt {
  font-size: 12px;
  color: #bbb;
  width: 60%;
  line-height: 20px;
  margin-left: 70px;
}
.content {
  display: flex;
  margin-bottom: 6px;
  // align-items: center;
  flex-direction: column;
  position: relative;
  .btn-upload{
      visibility: hidden;
  }
  .file-name {
    flex: 1;
    margin-left: 22px;
    font-size: 12px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-input {
    width: 350px;
    margin-left: 32px;
  }
  .closebtn {
    position: absolute;
    left: 80%;
    top: 10px;
    &:hover {
      color: #f25e0f;
    }
  }
}
</style>