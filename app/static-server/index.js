
/**
 * 
 * @Author  baixiaoji
 * 静态资源服务器 
 */

const path = require("path")
const fs = require("fs")

let getPath = (url) => {
    return path.resolve(process.cwd(), "public", `.${url}`)
}


/**
 *  1. 把代码变成 Primose
 * 2. apiServer.then(()=>{
 *  staticFunc()
 * })
 * 3. 自己实践promise的其他东西
 */


let staticFunc = (url) => {
    return new Promise((resolve, reject) => {
        if (url == "/") {
            url = "/index.html"
        }
        let _path = getPath(url);

        let body = fs.readFile(_path, (err, data) => {
            if (err) {
                reject(`not found ${err.stack}`)
            }
            resolve(data)
        })
    });
}

module.exports = staticFunc;