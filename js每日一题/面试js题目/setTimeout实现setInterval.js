// 定义一个具名回调函数a，方便用于自身的回调，如果出现times小于<=0的情况，那就清除定时器
var i = 0

function fn() {
    console.log('i', i++)
}
var setIntervalDemo = (fn, wait, times) => {
    let timer = setTimeout((a) => {
        times--
        fn()
        timer = setTimeout(a, wait)
        if (times <= 0) {
            clearTimeout(timer)
        }
    }, wait)
}
console.log(setIntervalDemo(fn, 2000, 3))