// const a = require('./test')
// console.log(require.extensions)
// console.log(a)

console.log(require.cache)
// 这一段用来测试exports不能直接赋值
var change = function(a) {
    a = {
        color: 'red'
    }
    console.log(a)
}
var a = {
    name: 'huahua'
}

change(a) 
console.log(a)

