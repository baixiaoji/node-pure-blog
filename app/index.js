// 主程序入口
const fs = require("fs")
const path = require("path")
const staticServer = require("./staticServer")
const apiServer = require("./api")
const urlParser = require("./url-parser")
class App {
    constructor() {

    }
    initServer() {
        // 初始化的工作
        return (request, response) => {
            let { url,method } = request
            // 返回的字符串或是buffer
           request.context = {
               body:'',
               query:{},
               method:"get"
           }
            urlParser(request).then((val)=>{
                return apiServer(request)
            }).then(val =>{
                /**
                 * return 
                 *     1. ajax返回的数组对象
                 *     2. underfined -> 走staticServer
                 */
                if(!val){
                    // Promise
                    return staticServer(request)
                }else{
                    return val
                }
            }).then(val =>{
                let body = ""
                // 数组
                let base = { "X-powered-by": "NodeJS" }
                if( val instanceof Buffer){
                    body = val
                }else{
                    body = JSON.stringify(val)
                     let finalHeader = Object.assign(base,{
                         "Content-Type":"application/json"
                     })
                     response.writeHead(200, "resolve ok",finalHeader)
                }
                response.end(body)
            })
           // apiServer(request)
            
        }
    }
}

module.exports = App