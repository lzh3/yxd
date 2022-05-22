<template>
    <div class="pay-box">
        <!-- <div class="record-title">充值和消费记录</div> -->
        <common-title title='充值和消费记录' />
        <div class="table_container">
            <el-table :data="tableData" header-cell-class-name='table-header' style="width: 100%" size='small'>

                <el-table-column prop="time" label="时间" width="150">
                </el-table-column>
                <el-table-column prop="money" label="金额变动" width="150">
                </el-table-column>
                <el-table-column prop="detail" label="描述" min-width="240">
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination @current-change="handleCurrentChange" :current-page="current" :page-size="20" layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            balance: 0, // 余额
            tableData: [
                {
                    time: '2016-05-04',
                    money: '100',
                    detail: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    time: '2016-05-04',
                    money: '100',
                    detail: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    time: '2016-05-04',
                    money: '100',
                    detail: '上海市普陀区金沙江路 1517 弄'
                },
            ],

            // 分页
            current: 0,
            size: 20,
            total: 3,
        }
    },
    created() {
        console.log('充值记录页面')
    },
    methods: {
        getList() {

        },
        handleCurrentChange(cur) {
            this.current = cur;
            this.getList();
        }
    }
};
</script>
<style scoped>
.el-pagination {
    text-align: right;
}
</style>
