<template>
    <div class="header">
        <el-header>
            <div class="leftItem">
                <div class="hamburger">
                    <i v-if="!isCollapse" class="el-icon-s-fold" @click="changeMenu"></i>
                    <i v-else class="el-icon-s-unfold" @click="changeMenu"></i>
                </div>
                <div class="breadcrumb">
                    <Breadcrumb />
                </div>
            </div>

            <div class="rightMenu">
                <right-menu />
            </div>
        </el-header>

    </div>
</template>
<script>
import Breadcrumb from '../../components/breadcrumb/Breadcrumb.vue'
import Hamburger from '../../components/hamburger/Hamburger.vue'
import rightMenu from '../../components/rightMenu/index.vue'
export default {
    props: ['isCollapse'],
    name: 'Header',
    components: {
        Breadcrumb,
        Hamburger,
        rightMenu,
    },
    // created() {
    //     this.name = getUsername('username')
    // },
    methods: {
        changeMenu() {
            this.$emit('changeCollapse');
            // console.log('折叠');
        }
    }

}
</script>
<style lang="less">
.header {


    .el-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .leftItem {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .hamburger {
                position: relative;
                left: -30px;
                font-size: 24px;
            }
        }
    }
}
</style>