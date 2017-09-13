// 主程序入口
const fs = require("fs")
const path = require("path")
const staticServer = require("./staticServer")
const apiServer = require("./api")
const urlParser = require("./url-parser")
class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        return (request, response) => {
            let { url, method } = request
            // 返回的字符串或是buffer
            request.context = {
                body: '',
                query: {},
                method: "get"
            }
            let context = {
                req: request,
                reqCtx: {
                    body: '',//post请求的数据
                    query: {},//处理客户端的get请求
                },
                res: response,
                resCtx: {
                    header: {},//response 的返回报文
                    body: "",//返回前端的内容区
                }
            }
            // request + response
            urlParser(context).then(() => {
                return apiServer(context)
            }).then(() => {
                return staticServer(context)
            }).then(() => {
                let { body } = context.resCtx
                // 数组
                let base = { "X-powered-by": "NodeJS" }
                
                response.writeHead(200, "resolve ok", base)
                response.end(body)
            })
            // apiServer(request)

        }
    }
}

module.exports = App