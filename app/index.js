// 主程序入口
const fs = require("fs")
const path = require("path")
class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        return (request, response) => {
            let { url } = request
            
            let staticPrefix =  path.resolve(process.cwd(),"public")
            let staticFunc = (url) =>{
                if(url === "/"){
                    url = "/index.html"
                }
                let _path = path.resolve(staticPrefix,`.${url}`)
                console.log(staticPath,url)
                fs.readFile(_path,(err,data)=>{
                    response.end(data)
                })
            }
            staticFunc(url)
        }
    }
}

module.exports = App