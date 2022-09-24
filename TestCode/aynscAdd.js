function asyncAdd(a, b, cb) {
    setTimeout(() => {
        cb(null, a + b)
    }, Math.random() * 1000)
}

async function total() {
    const res1 = await sum(1, 2, 3, 4, 5, 6, 4)
    const res2 = await sum(1, 2, 3, 4, 5, 6, 4)
    return [res1, res2]
}


// 实现下 sum 函数。注意不能使用加法，在 sum 中借助 asyncAdd 完成加法。尽可能的优化这个方法的时间。
function isUndefined(target) {
    return target === void 0
}
let cash = {}
async function sum(...num) {
    let res = 0
    let key = num.join('+')
    if (!isUndefined(cash[key])) return cash[key]
    for (let item of num) {
        res = await caculate(res, item)
    }
    cash[key] = res
    return res
}


function caculate(num1, num2) {
    return new Promise((resolve, reject) => {
        asyncAdd(num1, num2, (err, rs) => {
            if (err) {
                reject(err)
                return
            }
            resolve(rs)
        })
    })
}

console.log(total(), 'total')