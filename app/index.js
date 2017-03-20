// 主要核心入口

class App {
    constructor() {

    }
    initServer(request, response){
        response.end("hello world!")
    }
}

module.exports = App