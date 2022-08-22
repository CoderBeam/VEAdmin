<template>
    <div class="search">
        <el-input placeholder="请输入内容" v-model="input" prefix-icon="el-icon-search" clearable>
        </el-input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: ''
        }
    }
}
</script>

<style scoped lang="less">
.search {
    display: flex;
    justify-content: center;
    border-radius: 6px !important;

    .el-input {
        font-size: 16px;
        width: 90%;
        margin: 10px 0;
    }
}
</style>