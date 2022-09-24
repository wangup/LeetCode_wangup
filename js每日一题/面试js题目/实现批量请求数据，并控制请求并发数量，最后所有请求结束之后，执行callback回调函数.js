// 实现批量请求数据，并控制请求并发数量，最后所有请求结束之后，执行callback回调函数

// 请实现以下的函数，可以批量请求数据，所有的URL地址在urls参数中，同时可以通过max参数控制请求的并发度
// 当所有请求结束之后，需要执行callback回调函数
// 发请求的函数用fetch即可

// https://www.cnblogs.com/goloving/p/14607625.html

// 1. recursion函数用来处理传参的回调函数asyncHandle，并将要迭代的数组作为参数传入，方便asyncHandle函数回调继续处理。

// 2. recursion函数将要迭代的数组的第一个元素作为参数传给asyncHandle进行业务处理，asyncHandle需返回promise，才能进入 then 回调判断要迭代的数组是否迭代完，未迭代完的话就继续调用自身。

// 3. concat深拷贝数组避免数据污染

function sendRequestUrl(urls, max, callback) {
    let recursion = (arr) => {
        return callback(arr.shift()).then(() => {
            // console.log('arr', callback, arr)
            if (arr.length !== 0) return recursion(arr) // 数组还未迭代完，递归继续进行迭代
            else return 'finish'
        })
    }

    let listCopy = [].concat(urls) // 正在进行的所有并发异步操作
        // console.log('listCopy', recursion(listCopy))
    let asyncList = []
    while (max--) {
        asyncList.push(recursion(listCopy))
    }
    return Promise.all(asyncList) // 所有并发异步操作都完成后，本次并发控制迭代完成
}

var urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 100, 123]
var count = 0
sendRequestUrl(urls, 3, (curItem) => {
    return new Promise(resolve => {
        count++
        setTimeout(() => {
            console.log(curItem, '当前并发量：', count--)
            if (count > 4) {
                reject('error happen')
            }
            resolve(curItem)

        }, Math.random() * 2000)
    }).then(response => {
        console.log('finished', response)
    })
})