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
            // 返回的字符串或是buffer
           
            apiServer(url).then(val =>{
                /**
                 * return 
                 *     1. ajax返回的数组对象
                 *     2. underfined -> 走staticServer
                 */
                if(!val){
                    // Promise
                    return staticServer(url)
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
            // if (url.match("action")) {
            //     apiServer(url).then(val=>{
            //         body = JSON.stringify(val)
            //         headers = {
            //             "Content-Type":"application/json"
            //         }
            //         let finalHeader = Object.assign(headers,{ "X-powered-by": "NodeJS" })
            //         response.writeHead(200, "resolve ok",finalHeader)
            //         response.end(body)
            //     })
            // } else {
            //     body = staticServer(url)
            //     body.then((data) => {
            //         let finalHeader = Object.assign(headers,{ "X-powered-by": "NodeJS" })
            //         response.writeHead(200, "resolve ok",finalHeader)
            //         response.end(data)
            //     })
            // }
           
        }
    }
}

module.exports = App