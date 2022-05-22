<template>
    <div class="fillcontain">
        <common-title title='应用列表'></common-title>
        <div class="table_container">
            <el-table :data="tableData" header-cell-class-name='table-header' style="width: 100%" size='small'>
                <!-- <el-table-column type="index" width="100">
                </el-table-column> -->
                <el-table-column prop="registe_time" label="应用名称" width="150">
                </el-table-column>
                <el-table-column prop="username" label="应用ID" width="100">
                </el-table-column>
                <el-table-column prop="city" label="状态">
                </el-table-column>
                <el-table-column prop="city" label="购买时间">
                </el-table-column>
                <el-table-column prop="city" label="到期时间">
                </el-table-column>
                <el-table-column prop="city" label="连接数">
                </el-table-column>
                <el-table-column prop="city" label="套餐状态">
                </el-table-column>
                <el-table-column label="操作">
                    <template>
                        <div class="op-column">
                            <el-link type="primary" @click="toSetting">配置</el-link>
                            <el-link type="primary" @click='toPay(1)'>升级</el-link>
                            <el-link type="primary" @click='toPay(2)'>续费</el-link>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20" layout="total, prev, pager, next" :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
// import headTop from '../components/headTop'
// import {getUserList, getUserCount} from '@/api/getData'
export default {
    data() {
        return {
            tableData: [{
                registe_time: '2016-05-02',
                username: '王小虎',
                city: '上海市普陀区金沙江路 1518 弄'
            }, {
                registe_time: '2016-05-04',
                username: '王小虎',
                city: '上海市普陀区金沙江路 1517 弄'
            }, {
                registe_time: '2016-05-01',
                username: '王小虎',
                city: '上海市普陀区金沙江路 1519 弄'
            }, {
                registe_time: '2016-05-03',
                username: '王小虎',
                city: '上海市普陀区金沙江路 1516 弄'
            }],
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1,
        }
    },
    components: {
        // headTop,
    },
    created() {
        // this.initData();
    },
    methods: {
        toSetting(type) {
            // /admin/setting
            this.$router.push({
                path: '/admin/setting',
                query: {
                    type,
                }
            })
        },
        toPay(type) {
            this.$router.push({
                path: '/admin/upgrade',
                query: {
                    type,
                },
            })
        },
        getUserList() {
            this.$axios()
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
