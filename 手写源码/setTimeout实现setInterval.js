function mySetInterval(cb, wait) {
    let fn = () => {
        setTimeout(() => {
            cb()
            fn() // 递归调用自己
        }, wait)
    }
    setTimeout(fn, wait)
}

mySetInterval(() => {
    console.log(new Date())
}, 1000)