<template>
    <div class="pay-box">
        <common-title title='充值中心'></common-title>
    </div>
</template>
<script>
export default {
    data() {
        return {
            balance: 0, // 余额
        }
    },
    created() {
        console.log('充值页面')
    },
};
</script>
<style scoped>
</style>
