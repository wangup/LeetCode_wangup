// 同一类请求是有序发出的（根据按钮点击的次序），但是响应顺序却是无法预测的，
// 我们通常只希望渲染最后一次发出请求响应的数据，而其他数据则丢弃。因此，我们需要丢弃（或不处理）除最后一次请求外的其他请求的响应数据。

function CancelablePromise() {
    this.pendingPromise = null
}

// 包装一个请求并取消重复请求
CancelablePromise.prototype.request = function(requestFn) {
    if (this.pendingPromise) {
        this.cancel('取消请求')
    }
    // 失败的Promise对象
    const _promises = new Promise((resolve, reject) => { this.reject = reject })
        // 只要_promises或者requestFn是成功的，返回的状态就是resolve
    this.pendingPromise = Promise.race([_promises, requestFn()])
    return this.pendingPromise
}

// 取消当前请求
CancelablePromise.prototype.cancel = function(err) {
    this.reject(new Error(err))
    this.pendingPromise = null
}

const cancelPromise = new CancelablePromise()

// 测试用例
function createRequest(delay) {
    return () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('我已经done')
        }, delay)
    })
}

for (let i = 0; i < 5; i++) {
    cancelPromise.request(createRequest(1000)).then((res) => console.log(res, i, 'res')).catch(err => console.error(err))
}