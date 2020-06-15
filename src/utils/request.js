// 封装axios
import axios from "axios"
import jsonBig from "json-bigint"
// 配置基地址
const request = axios.create({
    baseURL: "http://ttapi.research.itcast.cn/app" //基础路径
})
// 请求拦截器
request.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)
// 响应拦截器
request.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        Promise.reject(error)
    }
)
// js 安全数
request.defaults.transformResponse = [function (data) {
    try {
        return jsonBig.parse(data)
    } catch{
        return {}
    }
}]
//导出
export default request