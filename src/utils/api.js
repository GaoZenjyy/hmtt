// 引入ajax
import request from "./request"
// 发送验证码
export const sendCode = (mobile) => {
    return request.get("/v1_0/sms/codes/" + mobile)
}