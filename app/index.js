// 主要核心入口

const fs = require("fs")
const path = require("path")
const staticServer = require("./static-server")
class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        //高级函数返回
        return (request, response) => {
            let { url } = request;
            // 根据 url 进行代码分发 
           
            let body = staticServer(url)
            response.end(body)
        }
    }
}

module.exports = App