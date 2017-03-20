
// const 常量
const http = require("http")


http.createServer( (request, response) => {
    
    response.write("1 2 3")
    response.end("<br>hello world!")

}).listen(7000,  () => {
    console.log("监听成功")
});