<template>
    <div class="pay-box">
        <!-- <div class="record-title">充值和消费记录</div> -->
        <common-title title='充值和消费记录' />
        <div class="table_container">
            <el-table :data="tableData" header-cell-class-name='table-header' style="width: 100%" size='small'>

                <el-table-column prop="created_at" label="时间" width="150">
                    <template slot-scope="scope">
                        <span>{{scope.row.created_at | dateFormate}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="before_recharge_cash_num" label="充值前" width="150">
                    <template slot-scope="scope">
                        <span>{{scope.row.before_recharge_cash_num || 0}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="recharge_cash_num" label="金额变动" width="150">
                    <template slot-scope="scope">
                        <span>{{scope.row.recharge_cash_num / 100 || 0}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="description" label="描述" min-width="240">
                </el-table-column>
            </el-table>
            <!-- <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination @current-change="handleCurrentChange" :current-page="current" :page-size="20" layout="total, prev, pager, next" :total="total">
                </el-pagination>
            </div> -->
        </div>
    </div>
</template>
<script>
import {rechargeRecordAPI} from '@/api'

export default {
    data() {
        return {
            balance: 0, // 余额
            tableData: [
                // {
                //     time: '2016-05-04',
                //     money: '100',
                //     detail: '上海市普陀区金沙江路 1517 弄'
                // },
            ],

            // 分页
            current: 0,
            size: 20,
            total: 3,
        }
    },
    created() {
        console.log('充值和消费记录')
        this.getList();
    },
    methods: {
        // 充值记录列表
        getList() {
            this.$axios.post(rechargeRecordAPI, {}).then((res)=>{
                // console.log('充值记录res', res.data)
                if(res.data&&res.data.errno===0){
                    this.tableData = res.data.data;
                }
            })
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
