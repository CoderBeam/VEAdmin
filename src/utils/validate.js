//用户名校验
export function usernameValidate(rule, value, callback) {
    //校验6-10位用户名
    let usernameReg = /^[a-zA-Z0-9_-]{5,10}$/
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else if (!usernameReg.test(value)) {
        callback(new Error('请输入6-10位用户名'))
    } else {
        callback()
    }
}

//密码校验
export function passwordValidate(rule, value, callback) {
    let passwordReg = /^\S*(?=\S{5,10})(?=\S*\d)(?=\S*[A-Z])|(?=\S*[a-z])\S*$/
    if (value === '') {
        callback(new Error('请输入密码'))
    } else if (!passwordReg.test(value)) {
        callback(new Error('请输入5-10位含有字母和数字的密码'))
    } else {
        callback()
    }
}