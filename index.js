
// 引进核心模块
const http = require("http")
const PORT = 7000;
// 创建服务器
const App = require("./app")
const server = new App()
http.createServer(server.initServer()).listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})