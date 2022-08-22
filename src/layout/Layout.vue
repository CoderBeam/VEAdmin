<template>
    <div class="layout">
        <el-container>
            <!-- 侧边导航栏 -->
            <el-aside width="auto">
                <sider-bar :isCollapse='isCollapse'></sider-bar>
            </el-aside>
            <el-container :class="{ isActive: isCollapse }" class="mainContainer">
                <el-header>
                    <Header @changeCollapse="changeCollapse" :isCollapse='isCollapse'></Header>
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import SiderBar from './component/SiderBar.vue'
import Header from './component/Header.vue'
export default {
    name: 'Layout',
    components: {
        SiderBar,
        Header
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        changeCollapse() {
            this.isCollapse = !this.isCollapse
        }
    }
}
</script>
<style scoped lang="less">
.layout {
    .mainContainer {
        transition: margin-left 0.5s;
        margin-left: 270px;
        min-height: 100vh;


        .el-header {
            background: #ffffff;
            color: #409eff;
            // line-height: 60px;
            box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.4);
        }
    }


    .isActive {
        margin-left: 64px;
    }

}
</style>