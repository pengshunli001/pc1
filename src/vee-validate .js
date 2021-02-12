import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)
var messages = "请输入";
VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    // 属性的提示信息
    attributes: {
        username: '用户名',
        phone: '手机号码',
        pwd: '密码',
        catputer: '图形验证码',
        oldPassword: '请输入新密码',//请输入新密码
        newPassword: '新密码不正确'//新密码不正确
    }
})
//验证方法扩展
//手机号验证
VeeValidate.Validator.extend('phone2', {
    getMessage: (field) => `请输入正确的` + field,
    validate: (value) => {
        return /[1]\d{10}/.test(value)
    }
});
//密码验证
VeeValidate.Validator.extend('pwd1', {

    getMessage: (field) => messages + field,
    validate: (value) => {
        if (/^[0-9a-zA-Z]{0,5}$/.test(value)) {
            messages = "密码长度要大于6位，由数字和字母组成";
            console.log(5)
            return false;
        }
        return true;
    }
}); 
