// 主程序入口
const fs = require("fs")
const path = require("path")
const staticServer = require("./staticServer")
const apiServer = require("./api")
class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        return (request, response) => {
            let { url } = request
            // 返回的字符串或是buffer
            let body = ""
            let headers = {}
            if (url.match("action")) {
                body = JSON.stringify(apiServer(url))
                headers = {
                    "Content-Type":"application/json"
                }
                let finalHeader = Object.assign(headers,{ "X-powered-by": "NodeJS" })
                response.writeHead(200, "resolve ok",finalHeader)
                response.end(body)
            } else {
                body = staticServer(url)
                body.then((data) => {
                    let finalHeader = Object.assign(headers,{ "X-powered-by": "NodeJS" })
                    response.writeHead(200, "resolve ok",finalHeader)
                    response.end(data)
                })
            }
           
        }
    }
}

module.exports = App