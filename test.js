
// 两种导出方式
// exports 是 module.exports 的简写
// exports.hello = "world";
// module.exports.hello = "world";

// module.exports = {
//     a : "a"
// }

// 学习Promise

// prototype ===>  then / catch

// static function ====> all/race/resolve/reject

// step 1  new 学习Promise
let p = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "hello world")
})

console.log(p)

// then 可以接受两个参数，第一个接受resolve的结果
// 第二个参数接受reject的结果

// 1. 将这些回调函数  存在处理队列queue
// 2. 如果promise 已经是fulfilled或rejected的状态，autoRun
p.then(val => {
    // 处理 resolve 结果
    console.log(`resolve val is ${val}`)
}, val => {
    // 处理reject的结果
    console.log(`reject val is ${val}`)
})

// 处理reject层面
setTimeout(() =>{
    console.log(p)
    p.catch(val => console.log(`catch val is ${val}`))
    }, 3000)

