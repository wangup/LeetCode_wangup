let num = [-4, 1, 10, -1, -8, 3, 6, -9, 1]

function changeNum(num) {
    let len = num.length
    for (let i = 0, left = 0; i < len; i++) {
        if (num[i] < 0) {
            if (num[left] > 0) {
                [num[i], num[left]] = [num[left], num[i]]
            }
            left++
        } else {
            // 大于0，就继续移动,左侧如果小于0就往右移动
            if (num[left] < 0) left++
                continue
        }
    }
    return num
}
console.log(changeNum(num))