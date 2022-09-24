function maxLength(arr) {
    let map = new Map()
    let len = arr.length,
        maxLen = 0
    for (let right = 0, left = 0; right < len; right++) {
        if (map.has(arr[right])) {
            // 遇到存在map的值，left指针就在前一个与这个值的索引再加一步
            left = Math.max(map.get(arr[right]) + 1, left)
        }
        map.set(arr[right], right)
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
}
let arr = [3, 3, 2, 1, 3, 3, 3, 1]
console.log(maxLength(arr), 'arr')