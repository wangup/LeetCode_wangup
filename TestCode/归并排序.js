function sortNum(num, left, right) {
    if (left >= right) return
    let mid = Math.floor((left + right) / 2)
    sortNum(num, left, mid)
    sortNum(num, mid + 1, right)
    core(num, left, right)
    return num
}

function core(num, left, right) {
    let mid = Math.floor((left + right) / 2)
    let leftTemp = left
    let rightTemp = mid + 1
    let index = 0,
        arr = []
    while (leftTemp <= mid && rightTemp <= right) {
        if (num[leftTemp] < num[rightTemp]) {
            arr[index++] = num[leftTemp++]
        } else {
            arr[index++] = num[rightTemp++]
        }
    }
    while (leftTemp <= mid) {
        arr[index++] = num[leftTemp++]
    }
    while (rightTemp <= right) {
        arr[index++] = num[rightTemp++]
    }
    index = 0
    for (let i = left; i <= right; i++) {
        num[i] = arr[index++]
    }
    return num
}
let num = [2, 3, 0, 9, 6]
console.log(sortNum(num, 0, num.length - 1))