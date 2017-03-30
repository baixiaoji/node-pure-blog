// 主要核心入口

const fs = require("fs")
const path = require("path")
const staticServer = require("./static-server")

const apiServer = require("./api")
class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        //高级函数返回
        return (request, response) => {
            let { url } = request;
            // 所有一action结尾的url，认为是ajax
            // DRY
            // 返回的字符串或buffer
            let body = "";
            let headers = {};
            if (url.match("action")) {
                apiServer(url).then(val => {
                    body = JSON.stringify(val)
                    headers = {
                        "Content-Type": "application/json"
                    }
                    let finalHeader = Object.assign(headers, { "X-powered-by": "Node.js" })
                    response.writeHead(200, "resolve ok", finalHeader)
                    response.end(body)
                })
            } else {
                // 每个请求逻辑  根据url进行分发
                staticServer(url).then((body) => {
                    let finalHeader = Object.assign(headers, { "X-powered-by": "Node.js" })
                    response.writeHead(200, "resolve ok", finalHeader)
                    response.end(body)
                })
            }
        }
    }
}

module.exports = App