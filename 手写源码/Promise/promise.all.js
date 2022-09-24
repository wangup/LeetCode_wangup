// 1.分析
//   返回结果是Promise；
//   传入输入数组，需要对传入参数做类型判断；
//   遍历数组，数组元素，可能不是promise，需要做类型判断，如果判断可以手动转成Promise；
//   所有传入Promise全部处理完成返回结果，且传入需要和输入出结果一一对应，用计数器。
// 2.特性：
//   传入的Promise全部成功则成功，一个失败则整体失败

Promise.all = function(promisesArr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promisesArr)) return new TypeError('参数错误')
        let count = 0,
            len = promisesArr.length,
            res = []
        promisesArr.forEach((promise, index) => {
            Promise.resolve(promise).then(data => {
                count++
                // res.push(data)
                res[index] = data
                if (count === len) {
                    return resolve(res)
                }
            }, err => {
                return reject(err)
            })
        })
    })
}
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 is OK!");
    }, 1000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 is OK!");
    }, 2000);
});
// let p1 = Promise.resolve(1)
// let p2 = Promise.resolve(2)
let p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'three')
})

Promise.all([p1, p2]).then(results => {
    console.log(results, 'data allSettled')
        // results.forEach(data => console.log(data, 'data allSettled'))
}).catch(err => {
    console.log(err, 'error')
})