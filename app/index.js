// 主要核心入口

const fs = require("fs")

class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        //高级函数返回
        return (request, response) => {
            let { url } = request;
            // 根据 url 进行代码分发 
            
            
            if(url == "/css/index.css"){
                fs.readFile("./public/css/index.css","utf-8",(err,data)=>{
                    response.end(data)
                })
            }
            if(url == "/js/index.js"){
                fs.readFile("./public/js/index.js","utf-8",(err,data)=>{
                    response.end(data)
                })
            }
            if(url == "/"){
                // readfile的第一个参数 其目录依据是 process.cwd()  node进程的启动目录及 script里的index.js
                fs.readFile("./public/index.html", "utf-8", (err, data) => {
                    response.end(data)
                })
            }
            
        }
    }
}

module.exports = App