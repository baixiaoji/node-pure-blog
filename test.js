// export  是 module.export 的简写   模块的导出
// 整个模块的查找目录还是有点区别的
// console.log(module.paths)
// 以前以为会找到C的根目录  结果只会找到整个项目的根目录
 
// 路径的分发
// if(url === "/css/index.css"){
//     fs.readFile("./public/css/index.css","utf-8",(err,data)=>{
//         response.end(data)
//     })
// }
// if(url === "/js/index.js"){
//     fs.readFile("./public/js/index.js","utf-8",(err,data)=>{
//         response.end(data)
//     })
// }
// if(url === "/"){
//     // 第一个参数是相对 nodeJS的启动目录而言  process.cwd()
//     // 每个请求都是走这里的回复
//     fs.readFile("./public/index.html", "utf-8", (err, data) => {
//         response.end(data)
//     })
// }