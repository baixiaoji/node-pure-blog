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
                fs.readFile(_path,"binary",(err,data)=>{
                    if(err){
                        data = "NOT FOUND"
                    }
                    // 读取 和 发送的编码格式要一致  也可以默认不行  会自动处理
                    // response 继承了 流 stream
                    response.end(data,"binary")
                })
            }
            staticFunc(url)
        }
    }
}

module.exports = App