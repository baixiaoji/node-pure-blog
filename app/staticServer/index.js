const path = require("path")
const fs = require("fs")


let getPath = (url) => path.resolve(process.cwd(),"public",`.${url}`)
let staticFunc = (url) =>{
    if(url === "/"){
        url = "/index.html"
    }
    let _path = getPath(url)

    return new Promise((resolve,reject)=>{
     
            fs.readFile(_path,(err,data) =>{
                resolve(data)
            })
        
    })

}

module.exports = staticFunc