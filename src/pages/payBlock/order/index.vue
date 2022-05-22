<template>
    <div class="pay-box">
        <!-- <div class="record-title">充值和消费记录</div> -->
        <common-title title='订单列表' />
        <div class="table_container">
            <el-table :data="tableData" header-cell-class-name='table-header' style="width: 100%" size='small'>
                <el-table-column prop="orderId" label="订单号" width="150">
                </el-table-column>
                <el-table-column prop="detail" label="套餐明细" width="150">
                </el-table-column>
                <el-table-column prop="time" label="购买时长" width="100">
                </el-table-column>
                <el-table-column prop="money" label="订单价格" width="100">
                </el-table-column>
                <el-table-column prop="time" label="创建时间" min-width="150">
                </el-table-column>
                <el-table-column prop="remark" label="备注" min-width="180">
                </el-table-column>
                <el-table-column prop="status" label="订单状态" min-width="100">
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.status===1?'正常':'过期'}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作" min-width="150">
                    <template>
                        <el-link type='danger'>删除</el-link>
                    </template>
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
                    orderId: '234545334356',
                    time: '2016-05-04',
                    money: '100',
                    detail: '上海市普陀区金沙江路 1517 弄',
                    remark: '备注：了坚实的李开复',
                    status: 1,
                },
                {
                    orderId: '234545334356',
                    time: '2016-05-04',
                    money: '100',
                    detail: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    orderId: '234545334356',
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
