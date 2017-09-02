const path = require("path")
const fs = require("fs")


let getPath = (url) => path.resolve(process.cwd(),"public",`.${url}`)
let staticFunc = (url) =>{
    if(url === "/"){
        url = "/index.html"
    }
    let _path = getPath(url)

    try{
        fs.readFile(_path,(err,data)=>{
           return data
        })
    }catch(err){
        data = `NOT FOUND ${err.stack}`
    }
    
}

module.exports = staticFunc