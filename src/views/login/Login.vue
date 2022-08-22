<template>
    <div class="login">
        <div class="loginFormContainer">
            <div class="loginTitle">管理员登录</div>
            <!-- 登录表单 -->
            <el-form status-icon :model="loginForm" :rules="rules" ref="ruleForm" class="loginForm">
                <!-- 用户名输入框 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid" placeholder="用户名"
                        @keyup.enter.native="login" clearable />
                </el-form-item>
                <!-- 密码输入框 -->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" show-password placeholder="密码"
                        @keyup.enter.native="login" clearable />
                </el-form-item>
            </el-form>
            <!-- 登录按钮 -->
            <el-button type="primary" @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
import { usernameValidate, passwordValidate } from '../../utils/validate.js'
export default {
    data() {
        return {
            loginForm: {
                username: "Admin",
                password: "admin"
            },
            rules: {
                username: [{ validator: usernameValidate, trigger: "blur" }],
                password: [{ validator: passwordValidate, trigger: "blur" }]
            }
        };
    },
    methods: {
        login() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.$message({ message: '登陆成功', type: 'success' })
                    this.$router.push('/home')
                }
            })
        }
    }
}
</script>
<style scoped lang="less">
.login {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url(../../assets/img/loginbg.jpg) center center / cover no-repeat;

    .loginFormContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        background: #fff;
        padding: 170px 60px 180px;
        width: 350px;
    }

    .loginTitle {
        color: #303133;
        font-weight: bold;
        font-size: 1rem;
    }

    .loginForm {
        margin-top: 1.2rem;
    }

    .loginFormContainer button {
        margin-top: 1rem;
        width: 100%;
    }
}
</style>
