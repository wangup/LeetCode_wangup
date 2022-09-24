// 特点：
// 无论成功失败，全部处理完之后统一返回
Promise.allSettled = function(promisesArr) {
    return new Promise((resolve, reject) => {
        let res = [],
            count = 0,
            len = promisesArr.length
        promisesArr.forEach((item, i) => {
            // Promise.resolve(item).then((data) => {
            //     res.push({ status: 'fulfilled', value: data })
            // }).catch(err => {
            //     res.push({ status: 'rejected', value: err })
            // }).finally(() => {
            //     if (++count === len) {
            //         resolve(res)
            //     }
            // })
            Promise.resolve(item).then((data) => {
                res[i] = { status: 'fulfilled', value: data }
                if (++count === len) {
                    resolve(res)
                }
            }).catch(err => {
                res[i] = { status: 'rejected', value: err }
                if (++count === len) {
                    resolve(res)
                }
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

Promise.allSettled([p1, p2, p3]).then(results => {
    results.forEach(data => console.log(data, 'data allSettled'))
})