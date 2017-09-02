// 主程序入口
const fs = require("fs")
class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        return (request, response) => {
            let { url } = request
            //console.log(request)
            
            if(url === "/css/index.css"){
                fs.readFile("./public/css/index.css","utf-8",(err,data)=>{
                    response.end(data)
                })
            }
            if(url === "/js/index.js"){
                fs.readFile("./public/js/index.js","utf-8",(err,data)=>{
                    response.end(data)
                })
            }
            if(url === "/"){
                // 第一个参数是相对 nodeJS的启动目录而言  process.cwd()
                // 每个请求都是走这里的回复
                fs.readFile("./public/index.html", "utf-8", (err, data) => {
                    response.end(data)
                })
            }
                
                
        }
    }
}

module.exports = App