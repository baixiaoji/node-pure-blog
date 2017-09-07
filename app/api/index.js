/**
 * api server
 */

 module.exports = (url) =>{
    // console.log(url) 
    let apiMap = {
        "/list.action":["衣服","书籍"],
        "/user.action":["hello","world","zouzou"]
    }
    return Promise.resolve(apiMap[url])
 }