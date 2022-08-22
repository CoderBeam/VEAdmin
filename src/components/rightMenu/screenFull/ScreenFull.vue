<template>
    <div class="fullScreen">
        <off-screen-one v-if="screenFull" theme="outline" size="22" fill="#409EFF" @click="changeScreen" />
        <full-screen-one v-else theme="outline" size="22" fill="#409EFF" @click="changeScreen" />

    </div>
</template>
<script>
import { FullScreenOne, OffScreenOne } from '@icon-park/vue'
export default {
    name: 'ScreenFull',
    data() {
        return {
            screenFull: false
        }

    },
    components: {
        FullScreenOne,
        OffScreenOne,
    },
    methods: {
        changeScreen() {
            let element = document.documentElement;
            if (this.screenFull) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullScreen) {
                    document.msExitFullScreen
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullScreen) {
                    element.msRequestFullScreen();
                }
            }
            this.screenFull = !this.screenFull;
        }
    }
}
</script>

<style scoped lang="less">
.fullScreen {
    padding: 0 10px 0 10px;
}
</style>