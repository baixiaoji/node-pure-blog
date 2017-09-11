/**
 * api server
 */

module.exports = (ctx) => {
    let { url, method } = ctx.req
    let { resCtx, reqCtx } = ctx
    // console.log(url) 
    let apiMap = {
        "/list.action": ["衣服", "书籍"],
        "/user.action": ["hello", "world", "zouzou"]
    }
    return Promise.resolve({
        then: (resolve, reject) => {
            // 过滤method方法
            if (method.toLowerCase() === "get") {
                resCtx.body = apiMap[url]
            } else {
                let { body } = reqCtx
                // 处理post B post --socket--> S
                resCtx.body = body
            }
            resolve()
        }
    })

}