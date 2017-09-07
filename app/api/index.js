/**
 * api server
 */

 module.exports = (request) =>{
    let { url,method ,context} = request
    // console.log(url) 
    let apiMap = {
        "/list.action":["衣服","书籍"],
        "/user.action":["hello","world","zouzou"]
    }
    // 过滤method方法
    if(method.toLowerCase() === "get"){
        return Promise.resolve(apiMap[url])
    }else{
        let {body} = context
       // 处理post B post --socket--> S
       return Promise.resolve(body)
    }
 }