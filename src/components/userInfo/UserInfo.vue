<template>
    <div class="user">
        <div class="userAvatar">
            <div class="userAvatarImg">
                <el-avatar shape="square" size="large" :src="squareUrl"></el-avatar>
            </div>
        </div>
        <!-- <div class="userInfo" :userInfo="userInfo">
            <div class="userInfoName">
                <span>{{ username }}</span>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            squareUrl: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
            // username: '',
        }
    },
}
</script>

<style scoped lang="less">
.user {
    display: flex;
    justify-content: center;
    align-items: center;

    .userAvatar {
        margin: 20px 0px 20px 0px;
    }

    .userInfo {
        margin: 20px;

        .userInfoName {
            font-size: 18px;
            font-weight: 600;
        }

        .userInfoProfession {
            font-size: 16px;
            font-weight: 500;
        }
    }
}
</style>