// 输入：
// 6,2,[1,2,3,4,5,6]
// 返回值：
// [5,6,1,2,3,4]
function solve(n, m, a) {
    m = m % n
    reverseArr(a, 0, n)
    reverseArr(a, 0, m)
    reverseArr(a, m, n)
    return a
}

function reverseArr(arr, n, m) {
    if (!arr || arr.length <= 1) return arr
    let right = m - 1
    for (let i = n; i < Math.floor((n + m) / 2); i++) {
        [arr[i], arr[right]] = [arr[right], arr[i]]
        right--
    }
    // return arr
}
let n = 6,
    m = 7,
    a = [1, 2, 3, 4, 5, 6]
console.log(solve(n, m, a))