<template>
    <div class="setting">
        <common-title title='应用管理'></common-title>
        <div class="setting-box">
            <div class="server">
                <div class="op-top">
                    <span>源服务器列表</span>
                    <el-button type='explain' size='small' @click="showServerDialog">添加源服务器</el-button>
                </div>
                <el-table :data="serverData" style="width: 100%">
                    <el-table-column prop="index" label="序号" width="180">
                    </el-table-column>
                    <el-table-column prop="IP" label="虚拟IP地址" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="源服务器地址">
                    </el-table-column>
                    <el-table-column prop="port" label="端口列表">
                    </el-table-column>
                    <el-table-column prop="" label="操作">
                        <template>
                            <div>

                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="tips">
                    说明: &nbsp; &nbsp;使用方法： 添加需要防护的服务器IP和端口，然后修改客户端和服务端配置，把和客户端连接相关的IP地址修改为相应的虚拟IP即可。生效时间1分钟
                    请务必使用【阿里云 华东1】云服务器，使用其他服务器的防护效果会大打折扣，请尽快更换！
                </div>
            </div>
            <div class="server">
                <div class="op-top">
                    <span>源程序列表</span>
                    <el-button type='explain' size='small' @click="showProgramDialog">上传应用程序</el-button>
                </div>
                <el-table :data="serverData" style="width: 100%">
                    <el-table-column prop="name" label="程序名称" width="180">
                    </el-table-column>
                    <el-table-column prop="size" label="大小" width="180">
                    </el-table-column>
                    <el-table-column prop="model" label="封装模式">
                    </el-table-column>
                    <el-table-column prop="status" label="状态">
                    </el-table-column>
                    <el-table-column prop="time" label="上传时间">
                    </el-table-column>
                    <el-table-column prop="" label="操作">
                        <template slot-scope="scope">
                            <div>
                                <el-link type='primary' @click="editApp(scope.row)">编辑</el-link>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="tips">
                    说明:服务器会自动对上传的应用程序进行封装处理,封装后的程序将具备云盾的防护效果(apk程序需要重新签名).
                    只允许上传exe和apk程序，程序大小不能超过100MB.
                    每个应用最多同时保存3个应用程序. 用户每天最多可上传10次.
                    使用方法请参见 使用帮助， 其他接入方式请参见 接入方式.
                </div>
            </div>
        </div>

        <yd-server-dialog title='添加源服务器' :visible="serverDialog" @close="closeServerDialog"></yd-server-dialog>
        <yd-program-dialog title='上传应用程序'  :visible="programDialog" @close='closeProgramDialog'></yd-program-dialog>
    </div>
</template>
<script>
import ydServerDialog from './yd-server-dialog.vue'
import ydProgramDialog from './yd-program-dialog.vue'

export default {
    data() {
        return {
            serverData: [
                {
                    index: 1,
                    ip: '255.255.255.0',
                    date: '2016-05-02',
                    port: '8080',
                    address: 'xxxxx'
                }
            ],
            serverDialog: false,
            programDialog: false,

        }
    }, 
    components: {
        ydServerDialog,
        ydProgramDialog,
    },
    methods: {
        editApp(row){

        },
        showServerDialog(){
            this.serverDialog = true;
        },
        closeServerDialog(){
            this.serverDialog = false
        },

        showProgramDialog(){
            this.programDialog=true;
        },
        closeProgramDialog(){
            this.programDialog = false;
        },
    }
}
</script>
<style lang="less" scoped>
.op-top {
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    background-color: #f5f6fa;
    &:after {
        content: "";
    }
    /deep/.el-button--small {
        height: 30px;
        padding: 9px 9px;
        margin-top: 5px;
    }
}
.server {
    margin-bottom: 20px;
    .tips {
        font-size: 12px;
        color: #31708f;
    }
}
</style>