let num = [3, 3, 5, 4, 3, 7, 0, 10, 10, 1, 2, 3]

// 一
function reduceNum(num) {
    // return num.reduce((pre, cur) => {
    //     pre.indexOf(cur) === -1 && pre.push(cur)
    //     return pre
    // }, [])
    return num.reduce((pre, cur) => pre.indexOf(cur) === -1 ? [...pre, cur] : pre, [])
}
console.log(reduceNum(num), 'reduceNum')

// 二
// filter方法
function filterNum(num) {
    // return num.filter((item, index) => num.indexOf(item) === index)
    return Array.prototype.filter.call(num, (item, index) => num.indexOf(item) === index)

}
console.log(filterNum(num), 'filterNum')

// 三
function reduceObj(num) {
    let res = [],
        obj = {}
    for (let i = 0; i < num.length; i++) {
        if (!obj[num[i]]) {
            res.push(num[i])
            obj[num[i]] = 1
        } else {
            obj[num[i]]++
        }
    }
    return res
}
console.log(reduceObj(num), 'reduceObj')

// 四
function sortReduce(num) {
    num.sort((a, b) => a - b)
    let len = num.length
    if (len < 1) return num
    let arr = [num[0]]
    for (let i = 1; i < len; i++) {
        if (num[i] !== num[i - 1]) {
            arr.push(num[i])
        }
    }
    return arr
}
console.log(sortReduce(num), 'sortReduce')

// 五递归去重
function recursion(num) {
    let len = num.length
    num.sort((a, b) => a - b)

    function loop(index) {
        if (index < 1) return
        if (num[index] === num[index - 1]) {
            num.splice(index, 1)
        }
        loop(index - 1)
    }
    loop(len - 1)
    return num
}
console.log(recursion(num), 'recursion')