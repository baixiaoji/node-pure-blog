
// const 常量
const http = require("http")

const App = require("./app"); // 找 目录下的index.js require(./app/index)

http.createServer(App).listen(7000,  () => {
    console.log("监听成功")
});