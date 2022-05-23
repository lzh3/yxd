const baseURL = "http://152.67.217.198:10089";
// 验证码
const sendCodeAPI = baseURL + "/user/send-msg-code";
// 注册
const registerAPI = baseURL + "/user/user-register/";
// 登录
const loginAPI = baseURL + "/user/user-login";
// 查看玩家信息
const userinfoAPI = baseURL + "/user/get-user-info/";
// 修改密码
const changePasswordAPI = baseURL + "/user/patch-password/";

export { sendCodeAPI, registerAPI, loginAPI, userinfoAPI, changePasswordAPI };
