
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
    reject(1)
}) 

console.log(p)

// then 可以接受两个参数，第一个接受resolve的结果
// 第二个参数接受reject的结果
p.then(val => {
    // 处理 resolve 结果
    console.log(`resolve val is ${val}`)
},val => {
    // 处理reject的结果
    console.log(`reject val is ${val}`)
})

// 处理reject层面
p.catch(val => console.log(`catch val is ${val}`))

