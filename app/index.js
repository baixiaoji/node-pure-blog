// 主要核心入口

const fs = require("fs")
const path = require("path")

class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        //高级函数返回
        return (request, response) => {
            let { url } = request;
            // 根据 url 进行代码分发 
            let getPath = (url) => {
                return path.resolve(process.cwd(),"public",`.${url}`)
            }
            let staticFunc = (url)=>{
                if(url == "/"){
                    url = "/index.html"
                }
                let _path = getPath(url);
                fs.readFile(_path,"utf-8",(err,data)=>{
                    response.end(data)
                })
            }
            staticFunc(url)
        }
    }
}

module.exports = App