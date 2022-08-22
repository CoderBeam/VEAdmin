<template>
    <div class="language">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                <translate theme="outline" size="22" fill="#409EFF" />
                <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>{{ $t('default.lan') }}</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>
</template>
<script>
import { Translate } from '@icon-park/vue';
export default {
    name: 'Language',
    components: {
        Translate
    }
}
</script>
<style scoped lang="less">
.language {
    padding: 0 0 0 5px;
}
</style>