<template>
    <div class="fillcontain">
        <common-title title='应用列表'></common-title>
        <div class="op-btns">
            <el-button type="primary" size='small' @click="getAppList"> <i class="el-icon-refresh"></i> 刷新</el-button>
            <el-button type="primary" size='small' @click="toPay(0)"> <i class="el-icon-circle-plus-outline"></i> 创建应用</el-button>
        </div>
        <div class="table_container">
            <el-table :data="tableData" border header-cell-class-name='table-header' style="width: 100%" size='small'>
                <!-- <el-table-column type="index" width="100">
                </el-table-column> -->
                <el-table-column prop="app_name" label="应用名称" width="150">
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.app_name}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="app_id" label="应用ID" width="100">
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.app_id}}
                        </div>
                    </template>
                </el-table-column>
                <!-- <el-table-column prop="status" label="状态">
            <template slot-scope="scope">
                <div>
                    {{scope.row.status | statusFilter}}
                </div>
            </template>
        </el-table-column> -->
                <el-table-column prop="buy_time" label="购买时间">
                </el-table-column>
                <el-table-column prop="end_time" label="到期时间">
                </el-table-column>
                <el-table-column prop="city" label="最大连接数">
                    <template slot-scope='scope'>
                        <div>
                            {{scope.row.max_online_equip_num || 0}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="套餐状态">
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.status | statusFilter}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <div class="op-column">
                            <el-link type="primary" @click="toSetting(scope.row)">配置</el-link>
                            <el-link type="primary" @click='toPay(1, scope.row)'>升级</el-link>
                            <el-link type="primary" @click='toPay(2, scope.row)'>续费</el-link>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <div class="Pagination" style="text-align: left;margin-top: 10px;">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20" layout="total, prev, pager, next" :total="count">
        </el-pagination>
      </div> -->
        </div>
    </div>
</template>

<script>
import { productListAPI } from '@/api'
import { STATUS } from '@/utils/enum'

export default {
    data() {
        return {
            tableData: [
                // {
                //   registe_time: '2016-05-02',
                //   app_name: '王小虎',
                //   status: 1,
                // }
            ],
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
        }
    },
    filters: {
        statusFilter(val) {
            return STATUS[val]
        }
    },
    created() {
        this.getAppList();
    },
    methods: {
        //  跳转配置
        toSetting(row) {
            // /admin/setting
            this.$router.push({
                path: '/admin/setting',
                query: {
                    // type,
                    id: row.id,
                }
            })
        },
        // 跳转续费
        toPay(type, row) {
            this.$router.push({
                path: '/admin/upgrade',
                query: {
                    type,
                    id: row.id
                },
            })
        },
        // 获取应用列表
        getAppList() {
            this.$axios.post(productListAPI, {}).then(res => {
                console.log('res-ydapp', res)
                if (res.data && res.data.errno === 0) {
                    this.tableData = res.data.data;
                }
            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.offset = (val - 1) * this.limit;
            this.getUsers()
        },

    },
}
</script>

<style lang='less' scoped>
.table-header {
    height: 30px;
}
.op-btns {
    text-align: right;
    margin-bottom: 12px;
}
.el-table__header-wrapper {
    /* height: 40px;
    line-height: 40px; */
}
.el-pagination {
    text-align: right;
}
/deep/.op-column {
    .el-link {
        margin-right: 5px;
    }
}
</style>
