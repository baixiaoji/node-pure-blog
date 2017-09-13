
// 引进核心模块
const http = require("http")
const PORT = 7000;
// 创建服务器
const App = require("./app")
const server = new App()
// 中间件
const staticServer = require("./app/staticServer")
const apiServer = require("./app/api")
const urlParser = require("./app/url-parser")

server.use(urlParser)
server.use(apiServer)
server.use(staticServer)

http.createServer(server.initServer()).listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})