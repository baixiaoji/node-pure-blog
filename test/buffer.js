const assert = require("assert")
// 学习Buffer 是实现了unit8Array   每一位都是2^8-1
// Buffer.from()
// 1.(string,encodng)
// const encodingTest = "hello world"
// let buf1 = Buffer.from(encodingTest,"utf8")
// console.log(buf1)
// 2.（buffer）
// let buf2 = Buffer.from([0x68,0x65,0x6c,0x6c,0x6f,0x20,0x77,0x6f,0x72,0x6c,0x64])
// console.log(buf2.toString())

// buffer转码   汉字需要三位的buffer
// let test = `窗`
// console.log(Buffer.from(test))


// Buffer.concat(list,totalength)
// let test = `窗`
// let buf3 = Buffer.from([0xe7])
// let buf4 = Buffer.from([0xaa])
// let buf5 = Buffer.from([0x97])
// concat的作用是讲buffer拼接为大的buffer
// console.log(Buffer.concat([buf3,buf4,buf5],3).toString("utf-8"))

//数据丢失
const fs = require("fs")
let data = fs.createReadStream("./test/temp",{
    highWaterMark:1,
})
let out = []
data.on("data",(chunk)=>{
    out.push(chunk)
    // out += chunk  //隐式 toString
}).on("end",()=>{
    // console.log(out)
    let l = out.length
    console.log(Buffer.concat(out,l).toString("utf-8"))
})