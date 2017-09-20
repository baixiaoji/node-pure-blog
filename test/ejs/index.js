const path = require('path')
const ejs = require("ejs")


const html = `hello 
    <% if(world.match("x")){ %>
    <%- world%>
    <%- include("test")%>
    <%}%>
    <%= hhh%>
    `

const world = "xxxx"
// 将字符串转化为Function
const f1 = ejs.compile(html,{
    // 为了让include函数找到模版要设置这filename属性
    filename:path.resolve(__filename),
    compileDebug:true
})
const finalStr = f1({
    world:'xxx',
    hhh:'<h1>XXXXX</h1>'
})

console.log(finalStr)
/**
 * <% %> 逻辑运算
 * <%- %> unescape  对特殊字符不转义
 * <%= %> escape  XSS 对特殊字符转义
 */