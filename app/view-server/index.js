/**
 * view-server
 */

// 映射表

//ejs动态渲染
const ejs = require("ejs")
const fs = require("fs")
const path = require("path")
const mime = require("mime")
const urlrewriteMap = require("./urlrewrite")
module.exports = (ctx) => {
    let { req, resCtx } = ctx
    let { url } = req;
    return Promise.resolve({
        then: (resolve, reject) => {
            if(url.match("action") || url.match(/\./)){
                resolve()
            }else{
                const viewPath = path.resolve(__dirname,"ejs")
                let ejsName = urlrewriteMap[url]
                if(ejsName){
                    let htmlPath = path.resolve(viewPath,ejsName+".ejs")
                    let html = fs.readFileSync(htmlPath,"utf8")
                    resCtx.headers = Object.assign(resCtx.headers,{
                        "Content-Type":"text/html"
                    })
                    resCtx.body = html;
                    resolve()
                }else{
                    //重定向的功能
                    
                    resolve()
                }
            }
            
            // let viewPath = path.resolve(process.cwd(),"public")
            // if(urlMap[url]){
            //     let {viewName} = urlMap[url]
            //     let htmlPath = path.resolve(viewPath,viewName)
            //     resCtx.headers = Object.assign(resCtx.headers,{
            //         "Content-Type":mime.getType(htmlPath)
            //     })
            //     let render = ejs.compile(fs.readFileSync(htmlPath,"utf8"),{
            //         compileDebug:true
            //     })
            //     resCtx.body = render()
            //     resolve()
            // }else{
            //     resolve()
            // }
            


        }
    })
}