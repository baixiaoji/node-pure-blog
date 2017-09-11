const path = require("path")
const fs = require("fs")


let getPath = (url) => path.resolve(process.cwd(), "public", `.${url}`)
let staticFunc = (ctx) => {
    let { url } = ctx.req
    let {resCtx} = ctx 
    return new Promise((resolve, reject) => {
        if (url === "/") {
            url = "/index.html"
        }
        let _path = getPath(url)
        fs.readFile(_path, (err, data) => {
            if (err) {
                resCtx.body = `NOT FOUND ${err.stack}`
            }
            resCtx.body = data
            resolve()
        })
    })
}

module.exports = staticFunc