// 主要核心入口

const fs = require("fs")

class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        let _package = require("../package")
        //高级函数返回
        return (request, response) => {
            // readFile 异步
            // readfile的第一个参数 其目录依据是 process.cwd()  node进程的启动目录及 script里的index.js
            fs.readFile("./public/index.html", "utf-8", (err, data) => {
                response.end(JSON.stringify(_package))
            })
        }
    }
}

module.exports = App