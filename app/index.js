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


            if (url.match("action")) {
                let body = apiServer(url)

               
                    response.writeHead(200, "resolve ok", { "X-powered-by": "NodeJS" })
                    response.end(body)
                
            } else {
                let body = staticServer(url)

                body.then((data) => {
                    response.writeHead(200, "resolve ok", { "X-powered-by": "NodeJS" })
                    response.end(data)
                }).catch((err) => {
                    response.end(`NOT FOUND ${err.stack}`)
                })
            }

        }
    }
}

module.exports = App