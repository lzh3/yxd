<template>
    <div class="home">
        <section class="home-main">
            <div class="main-block">
                <div class="block-header">你好，xxx</div>
                <div class="phone main-item">
                    <span>手机号码</span>
                    <span>14892394359</span>
                </div>
                <div class="email main-item">
                    <span>电子邮箱</span>
                    <span>12233423444@qq.com</span>
                </div>
            </div>
            <div class="main-block">
                <div class="block-title">应用状态</div>
                <ul class="block-ul">
                    <li>
                        <span>等待支付</span>
                        <span>共2个</span>
                    </li>
                    <li>
                        <span>即将过期</span>
                        <span>共2个</span>
                    </li>
                    <li>
                        <span>需要升级</span>
                        <span>共2个</span>
                    </li>
                </ul>
            </div>
            <div class="main-block">
                <div class="block-title">统计信息</div>
                <ul class="block-ul">
                    <li>
                        <span>应用数量</span>
                        <span>共2个</span>
                    </li>
                    <li>
                        <span>连接数(总)</span>
                        <span>2个</span>
                    </li>
                    <li>
                        <span>上/下行带宽(总)</span>
                        <span>共2个</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="pay-block">
            <div class="pay-main">
                账户余额： <span class="money">0元</span>
                <el-button class="pay-btn" type="warning" size='medium'>立即充值</el-button>
                <el-button type="primary" size='medium'>购买产品</el-button>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
};
</script>
<style lang='less' scoped>
.home-main {
    display: flex;
    min-width: 820px;
    .main-block {
        flex: 1;
        height: 248px;
        border: 1px solid #ddd;
        &:not(:last-child) {
            margin-right: 12px;
        }
    }
}
.main-block {
    .block-header {
        width: 100%;
        height: 140px;
        line-height: 140px;
        background-color: #aec785;
        text-align: center;
    }
    .main-item {
        display: flex;
        justify-content: space-between;
        padding: 0 12px;
        height: 50px;
        line-height: 50px;
        color: #999;
        &:not(:last-child) {
            border-bottom: 1px solid #eee;
        }
    }

    .block-title {
        height: 50px;
        line-height: 50px;
        background-color: #fafafa;
        font-size: 16px;
        // text-indent: 2em;
        padding-left: 15px;
    }
    .block-ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        // height: 100%;
        // align-items: center;
        li {
            flex: 1;
            display: flex;
            justify-content: space-between;
            line-height: 66px;
            padding: 0 12px;
            color: #999;
            &:not(:last-child) {
                border-bottom: 1px solid #eee;
            }
        }
    }
}
.pay-block {
}
.pay-main {
    margin-top: 24px;
    padding: 0 20px;
    line-height: 92px;
    border: 1px solid #eee;
    .money {
        color: #f80;
    }
    .pay-btn {
        margin: 0 20px;
    }
}
</style>
