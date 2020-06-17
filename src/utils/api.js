// 引入ajax
import request from "./request"
// 发送验证码
export const sendCode = (mobile) => {
    return request.get("/v1_0/sms/codes/" + mobile)
}
// 登录页面
export const login = (mobile, code) => {
    return request.post("/v1_0/authorizations", { mobile, code })
}
// 获取全部新闻
export const getAllChannels = () => {
    return request.get('/v1_0/channels')
}