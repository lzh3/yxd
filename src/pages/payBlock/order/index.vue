<template>
    <div class="pay-box">
        <!-- <div class="record-title">充值和消费记录</div> -->
        <common-title title='订单列表' />
        <div class="table_container">
            <el-table :data="tableData" header-cell-class-name='table-header' style="width: 100%" size='small'>
                <el-table-column prop="order_id" label="订单号" width="150">
                </el-table-column>
                <el-table-column prop="detail" label="套餐明细" width="150">
                </el-table-column>
                <el-table-column prop="buy_day" label="购买时长" width="100">
                    <template slot-scope="scope">
                        <div>{{scope.row.buy_day}} 天</div>
                    </template>
                </el-table-column>
                <el-table-column prop="money_num" label="订单价格" width="100">
                    <template slot-scope="scope">
                        <div>{{scope.row.money_num}} 元</div>
                    </template>
                </el-table-column>
                <el-table-column prop="created_at" label="创建时间" min-width="150">
                    <template slot-scope="scope">
                        <div>{{scope.row.created_at | dateFormate}}</div>
                    </template>
                </el-table-column>
                <!-- <el-table-column prop="remark" label="备注" min-width="180">
                </el-table-column>-->
                <!-- renew_time -->
                <el-table-column prop="renew_time" label="续费时间" min-width="150">
                    <template slot-scope="scope">
                        <div>{{scope.row.renew_time | dateFormate}}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="订单状态" min-width="100">
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.status | statusFilter}}
                        </div>
                    </template>
                </el-table-column>
                <!-- <el-table-column label="操作" min-width="150">
                    <template>
                        <el-link type='danger'>删除</el-link>
                    </template>
                </el-table-column> -->
            </el-table>
            <!-- <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination @current-change="handleCurrentChange" :current-page="current" :page-size="20" layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div> -->
        </div>
    </div>
</template>
<script>
import {orderListAPI} from '@/api'
import {STATUS} from '@/utils/enum'

export default {
    data() {
        return {
            balance: 0, // 余额
            tableData: [
                // {
                //     orderId: '234545334356',
                //     time: '2016-05-04',
                //     money: '100',
                //     detail: '上海市普陀区金沙江路 1517 弄',
                //     remark: '备注：了坚实的李开复',
                //     status: 1,
                // },
            ],

            // 分页
            current: 0,
            size: 20,
            total: 3,
        }
    },
    created() {
        console.log('订单页面')
        this.getList();
    },
    filters: {
        statusFilter(val){
            return STATUS[val]
        }
    },
    methods: {
        getList() {
            this.$axios.post(orderListAPI,{}).then((res)=>{
                 if(res.data&&res.data.errno===0){
                    this.tableData = res.data.data;
                }
            })
        },
        // 分页change
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
