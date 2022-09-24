var addBinary = function(a, b) {
    let carry = 0
        // 先判断长度是否相等，不够补0
    while (a.length < b.length) {
        a = 0 + a
    }
    while (a.length > b.length) {
        b = 0 + b
    }
    // 利用数组存变量
    let res = new Array(a.length).fill(0)
    for (let i = a.length - 1; i >= 0; i--) {
        // 相加
        const sum = parseInt(a[i]) + parseInt(b[i]) + carry
            // 如果sum大于等于2，则进位
        if (sum >= 2) {
            carry = 1
            res[i] = sum - 2
        } else {
            res[i] = sum
            carry = 0;
        }
    }
    // 如果carry还存在的话
    if (carry > 0) res.unshift(carry)
    return res.join('')
};
let a = "11",
    b = "10"
    // let a = "1010", b = "1011"  
console.log(addBinary(a, b), 'addBinary')