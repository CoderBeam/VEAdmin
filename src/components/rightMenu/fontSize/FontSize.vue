<template>
    <div class="fontSize">
        <el-dropdown trigger="click" @command="handleSetSize">
            <div>
                <add-text theme="outline" size="22" fill="#409EFF" />
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item of sizeOptions" :key="item.value" :disabled="size === item.value"
                    :command="item.value">
                    {{
                            item.label
                    }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import { AddText } from '@icon-park/vue';
export default {
    components: {
        AddText
    },
    data() {
        return {
            sizeOptions: [
                { label: '默认字体', value: 'default' },
                { label: '中号字体', value: 'medium' },
                { label: '小号字体', value: 'small' },
                { label: '迷你字体', value: 'mini' }
            ]
        }
    },
    computed: {
        size() {
            return this.$store.getters.size
        }
    },
    methods: {
        handleSetSize(size) {
            console.log(size);
            this.$ELEMENT.size = size
            this.$store.dispatch('app/setSize', size)
            this.refreshView()
            this.$message({
                message: '成功修改字体大小',
                type: 'success'
            })
        },
        refreshView() {
            // In order to make the cached page re-rendered
            this.$store.dispatch('tagsView/delAllCachedViews', this.$route)
            const { fullPath } = this.$route
            this.$nextTick(() => {
                this.$router.replace({
                    // path: '/redirect' + fullPath
                    path: fullPath
                })
            })
        }
    }
}
</script>
<style scoped lang="less">
.fontSize {
    padding: 0 10px 0 10px;
}
</style>