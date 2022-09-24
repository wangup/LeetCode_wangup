// setTimeout返回值为一个ID，当你想clearTimeout这个ID时，结果因为递归调用后ID有所改变，导致消除的ID不是自己想要的
// 解决方法：
// 用timeID缓存setTimeout返回的ID值

function myClearInterval(cb, wait) {
    let timeId = null
    let fn = () => {
        timeId = setTimeout(() => {
            cb()
            fn()
        }, wait)
    }
    fn()
    return () => clearTimeout(timeId)
}

const cancel = myClearInterval(() => {
    console.log(new Date())
}, 1000)

setTimeout(() => {
    cancel()
}, 2000)