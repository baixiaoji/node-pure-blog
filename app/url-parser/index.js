/**
 * url-parser
 * 处理客户端数据
 */

 // request : query + body + method

 module.exports = (ctx) =>{
   let {method,url} = ctx.req
   let {reqCtx} = ctx
   method = method.toLowerCase()
    return Promise.resolve({
        then:(resolve,reject)=>{
            if(method === "post"){
                let data = ''
                // 可以获取到post请求的数据 
                //使用的stream request原型链上的
                // readable stream eventEmitter
                // paused flow 
                request.on("data",(chunk)=>{
                    data+= chunk
                }).on("end",()=>{
                    // body
                    reqCtx.body = JSON.parse(data)
                   resolve()
                })
            }else{
                resolve()
            }
            
        }
    })
 }