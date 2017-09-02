// 主程序入口
const fs = require("fs")
const path = require("path")
const staticServer = require("./staticServer")

class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        return (request, response) => {
            let { url } = request

            let body = staticServer(url)            
            // console.log(body)
            response.end(body)
        }
    }
}

module.exports = App