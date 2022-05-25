const baseURL = "http://152.67.217.198:10089";
// 验证码
const sendCodeAPI = baseURL + "/user/send-msg-code";
// 注册
const registerAPI = baseURL + "/user/user-register/";
// 登录
const loginAPI = baseURL + "/user/user-login";
// 查看玩家信息
const userinfoAPI = baseURL + "/user/get-user-info/";
// 修改玩家信息
const changeUserinfoAPI = baseURL + "/user/patch-user-info/";
// 修改密码
const changePasswordAPI = baseURL + "/user/patch-password/";

// 玩家充值记录
const rechargeRecordAPI = baseURL + "/cash/recharge-record/";
// 玩家订单
const orderListAPI = baseURL + '/cash/order-list/'

// 云盾应用
// 应用列表
const productListAPI = baseURL + '/product/product-list/';
// 创建应用
const createProductAPI = baseURL + '/product/create-product'
// 编辑应用（升级/续费） 
const patchProductAPI = baseURL + '/product/patch-product/';
// 上传文件
const uploadFileAPI = baseURL +'/product/upload-app/'
// 已上传的文件列表
// /product/has-upload-file-list/


export {
  sendCodeAPI,
  rechargeRecordAPI,
  registerAPI,
  loginAPI,
  userinfoAPI,
  changePasswordAPI,
  changeUserinfoAPI,
  orderListAPI,
  productListAPI,
  createProductAPI,
  patchProductAPI,
  uploadFileAPI,
};
