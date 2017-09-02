const path = require("path")
const fs = require("fs")


let getPath = (url) => path.resolve(process.cwd(),"public",`.${url}`)
let staticFunc = (url) =>{
    if(url === "/"){
        url = "/index.html"
    }
    let _path = getPath(url)

    let data = ""
    try{
         data = fs.readFileSync(_path)
    }catch(err){
        data = `NOT FOUND ${err.stack}`
    }
    return data
}

module.exports = staticFunc