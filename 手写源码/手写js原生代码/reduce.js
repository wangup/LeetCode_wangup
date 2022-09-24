Array.prototype.myReduce = function(callback, ...args) {
    if (typeof callback !== 'function') {
        throw new Error('callback不是函数')
    }
    let start = 0,
        pre = null
    if (args.length) {
        // 有参数的话，就取参数第一个做初始值
        pre = args[0]
    } else {
        // 无参数，就取自身的第一个做初始值
        pre = this[0]
        start = 1
    }
    for (let i = start; i < this.length; i++) {
        pre = callback(pre, this[i], i, this)
    }
    return pre
}

let num = [3, 4]
    // let sum = num.myReduce((pre, cur) => {
    //     return pre + cur
    // }, 1)
let sum = num.myReduce(1, 1)
console.log(sum)