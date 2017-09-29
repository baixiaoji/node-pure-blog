// 主程序入口
const fs = require("fs")
const path = require("path")

class App {
    constructor() {
        this.middlewaveArr = []
        // 设计一个空的Promise
        this.middlewaveChain = Promise.resolve()
    }
    use(middlewave) {
        this.middlewaveArr.push(middlewave)
    }
    // 创建Promise链条
    composeMiddlewave(context) {
        let { middlewaveArr } = this
        //根据中间件数组创建Promise链条  就是和之前做的差不多
        for (let middlewave of middlewaveArr) {
            this.middlewaveChain = this.middlewaveChain.then(() => {
                return middlewave(context)
            })
        }
        return this.middlewaveChain
    }
    initServer() {
        // 初始化的工作
        return (request, response) => {
            let { url, method } = request
            // 返回的字符串或是buffer
            let context = {
                req: request,
                reqCtx: {
                    body: '',//post请求的数据
                    query: {},//处理客户端的get请求
                },
                res: response,
                resCtx: {
                    statusMessage:"resolve ok",
                    statusCode:200, // 状态码
                    headers: {},//response 的返回报文
                    body: "",//返回前端的内容区
                }
            }
            // request + response
            // Promise.resolve(参数) ===> 通过context对象来传递

            //1. 每一个中间件只需要关注修改context对象即可，彼此独立
            //2. 设计了use和composeMiddlewave这两个API用来的创建Promise链
            // 3. 开发者可以专注于中间件开发

            // 函数体可以百年不变
            this.composeMiddlewave(context)
            .then(() => {
                let { body, headers,statusCode,statusMessage } = context.resCtx
                // 数组
                let base = { "X-powered-by": "NodeJS" }
                // writeHead status code  status message  header
                // writeHead里面的header会覆盖setHeader里面的对应的key值
                response.writeHead(statusCode, statusMessage, Object.assign(base, headers))
                response.end(body)
            })
            // apiServer(request)

        }
    }
}

module.exports = App