
// const 常量
const http = require("http")


http.createServer(function (request, response) {

    response.end("hello world!")

}).listen(7000, function () {
    console.log("监听成功")
});