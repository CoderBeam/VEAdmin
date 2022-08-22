<template>
    <div class="siderBar">
        <el-menu class="el-menu-vertical" background-color="#ffffff" text-color="#707070" active-text-color="#707070"
            :unique-opened="true" router :collapse="isCollapse">
            <user-info />
            <Search />
            <template v-for="item in menuList">
                <!-- 一级菜单，存在在子菜单且子菜单大于1，或者为关闭状态 -->
                <template v-if="item.children && item.children.length > 1">
                    <el-submenu :key="item.id" :index="item.path + ''">
                        <template slot="title">
                            <i :class="item.iconClass"></i>
                            <span slot="title">{{ item.name }}</span>
                        </template>
                        <el-menu-item :index="subItem.path + ''" v-for="subItem in item.children" :key="subItem.id">
                            <i :class="subItem.iconClass"></i>
                            {{ subItem.name }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <!-- 子菜单只有一项时执行 -->
                <template v-else>
                    <el-menu-item :index="subItem.path + ''" v-for="subItem in item.children" :key="subItem.id">
                        <i :class="item.iconClass"></i>
                        <span slot="title">{{ subItem.name }}</span>
                    </el-menu-item>
                </template>
            </template>
            <Logout />
        </el-menu>
    </div>
</template>

<script>
import UserInfo from '../../components/userInfo/UserInfo.vue'
import Search from '../../components/search/Search.vue';
import Logout from '../../components/logout/Logout.vue';
export default {
    name: 'SiderBar',
    components: {
        UserInfo,
        Search,
        Logout,
    },
    props: ['isCollapse'],
    data() {
        return {
            menuList: [],

        }
    },
    created() {
        this.menuList = this.$router.options.routes;
    },

}
</script>

<style lang="less">
.siderBar {
    position: fixed;
    width: 270px;
    top: 0;
    bottom: 0;


    .el-menu {
        top: 0;
        left: 0;
        height: 100%;
        background: #fff;
        z-index: 100;

        // overflow: hidden;

        .el-menu-vertical:not(.el-menu--collapse) {
            width: 270px;
            min-height: 400px;
        }

    }


    .el-submenu .el-menu-item {
        min-width: 0;
    }

    .el-submenu__title:hover,
    .el-menu-item:hover,
    .logout:hover {
        background-color: #695cfe !important;
        color: #ffffff !important;
        border-radius: 6px;
    }
}
</style>