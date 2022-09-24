let nums = [9, 10, 11, 12, 100, 101, 102, 103, 1, 2, 3, 4]

// 找最大值
function findMax(num) {
    let left = 0,
        right = num.length - 1
    if (num[left] <= num[right]) {
        return num[right]
    }
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (num[mid] > num[left]) {
            left = mid
        } else if (num[mid] < num[left]) {
            right = mid - 1
        } else {
            // 是这个mid的值绝不是最大值，所以去除这个继续在左端查找
            left = left + 1
        }
    }
    return num[right]
}
console.log(findMax(nums), '我的最大值')

// 最小值
function findMin(num) {
    let left = 0,
        right = num.length - 1
    while (left < right) {
        const mid = (left + right) >> 1
        if (num[mid] > num[right]) {
            left = mid + 1
        } else if (num[mid] < num[right]) {
            right = mid
        } else {
            // 是这个mid的值绝不是最小值，所以去除这个继续在右端查找
            right = right - 1
        }
    }
    return nums[left]
}

console.log(findMin(nums), '最小值')


function findMaxNum(nums) {
    let left = 0,
        len = nums.length
    let right = len - 1
    if (nums[left] <= nums[right]) {
        return nums[right]
    }
    while (left < right) {
        let mid = Math.floor((right + left) / 2)
        if (nums[left] > nums[mid]) {
            right = mid - 1
        } else if (nums[left] < nums[mid]) {
            left = mid
        } else {
            left = left + 1
        }
    }
    return nums[right]
}
console.log(findMaxNum(nums), 'findMaxNum')

function findMinNum(num) {
    let left = 0,
        len = num.length
    let right = len - 1
    while (left < right) {
        const mid = (left + right) >> 1
        if (num[mid] > num[right]) {
            left = mid + 1
        } else if (num[mid] < num[right]) {
            right = mid
        } else {
            right = right - 1
        }
    }
    return num[left]
}
console.log(findMinNum(nums))