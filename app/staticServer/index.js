const path = require("path")
const fs = require("fs")


let getPath = (url) => path.resolve(process.cwd(),"public",`.${url}`)
let staticFunc = (url) =>{
 
    return new Promise((resolve,reject)=>{
        if(url === "/"){
            url = "/index.html"
        }
        let _path = getPath(url)
    
        let data = ""
        try{
            fs.readFile(_path,(err,data) =>{
                resolve(data)
            })
        }catch(err){
           reject(`NOT FOUND ${err.stack}`)
       }
    })
    
   
    //return data
}

module.exports = staticFunc