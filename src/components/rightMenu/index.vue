<template>
    <div class="rightMenu">
        <div class="screenFull">
            <screen-full />
        </div>
        <div class="fontSize">
            <el-tooltip class="item" effect="dark" content="字体大小" placement="bottom">
                <font-size />
            </el-tooltip>
        </div>
        <div class="language">
            <el-tooltip class="item" effect="dark" content="显示语言" placement="bottom">
                <Language />
            </el-tooltip>
        </div>

    </div>
</template>
<script>
import ScreenFull from './screenFull/ScreenFull.vue';
import Language from './language/Language.vue';
import FontSize from './fontSize/FontSize.vue';
export default {
    name: 'rightMenu',
    components: {
        ScreenFull,
        FontSize,
        Language,
    }
}
</script>
<style scoped lang="less">
.rightMenu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

}
</style>