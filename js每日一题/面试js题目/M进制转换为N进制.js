// 输入数字M和进制数N，写一个方法得到M换算成N进制的结果
// 例如：输入7,2输出111
function translate(m, n) {
    let res = 0
    while (m / n != 0) {
        let num = Math.floor(m / n)
        let arr = m % n
        res = 10 * res + arr
        m = num
    }
    return res
}
console.log(translate(7, 2))