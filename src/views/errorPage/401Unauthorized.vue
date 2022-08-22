<template>
    <div class="unauthorized">
        <div class="unauthorizedImg">
            <img src="../../assets/img/401.png" alt="unauthorized">
        </div>
        <div class="unauthorizedTextAndButton">
            <div class="unauthorizedText">
                <span class="oops">OOPS!</span><br />
                <span class="headLine">The webmaster said that you are unauthorized to access this page...</span><br />
                <span class="info">Please check whether the user has legal rights, or click the button below to return
                    to the homepage.</span>
            </div>
            <div class="unauthoorizedButton">
                <el-button type="primary" round @click="toHome">去首页看看</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toHome() {
            this.$router.push('/home')
        }
    }
}
</script>
<style scoped lang="less">
.unauthorized {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Times New Roman', Times, serif;
    overflow: hidden;

    .unauthorizedImg img {
        width: 300px;
        height: 400px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        margin-top: 45%;
    }

    .unauthorizedTextAndButton {
        margin-top: 80px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;

        .unauthorizedText {
            position: relative;
            float: left;
            width: 300px;
            padding: 30px 0;
            overflow: hidden;

        }

        .oops {
            font-size: 32px;
            font-weight: bold;
            line-height: 60px;
            color: #1482f0;
            margin-bottom: 20px;
        }

        .headLine {
            font-size: 22px;
            line-height: 24px;
            color: #222;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .info {
            font-size: 18px;
            line-height: 21px;
            color: grey;
            margin-bottom: 30px;
        }
    }

    @keyframes slideUp {
        0% {
            transform: translateY(60px);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
}
</style>