<template>
    <div class="common-title">
        {{title}}
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="less" scoped>
.common-title {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 14px;
    padding-left: 14px;
    border-bottom: 1px solid #eee;
    &:after {
        content: "";
        position: absolute;
        top: 12px;
        left: 0;
        width: 2px;
        height: 16px;
        font-size: 14px;
        font-weight: 500;
        background-color: #88b7e0;
    }
}
</style>