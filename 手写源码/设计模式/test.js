new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('setTimeout')
        resolve()
    }, 0)
    console.log('suc')
}).then(res => {
    console.log('res')
})
console.log('1')