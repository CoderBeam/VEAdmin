<template>
    <div class="logout" @click="logout">
        <i class="el-icon-back"></i>
        <span>退出登录</span>
    </div>
</template>

<script>
export default {
    name: 'Logout',
    methods: {
        logout() {
            window.localStorage.clear()//销毁username
            this.$router.push('/')
        }
    }
}
</script>

<style scoped lang="less">
.logout {
    height: 60px;
    line-height: 60px;
    width: 100%;
    position: absolute;
    bottom: 10px;
    // text-align: left;
    cursor: pointer;

    .el-icon-back {
        font-size: 20px;
        font-weight: 600;
        margin-left: 25px;
        letter-spacing: 60px;
    }
}
</style>