var threeSum = function(arr) {
    // let arr = quickSort(nums, 0, nums.length - 1)
    if (arr.length < 3) {
        return []
    }
    arr.sort()
    let flag = -666,
        len = arr.length
    let res = [],
        map = new Map()
    for (let i = 0; i < len - 2; i++) {
        if (arr[i] > 0) break
        if (map.has(arr[i])) {
            continue
        }
        map.set(arr[i], i)
        let left = i + 1,
            right = len - 1
        while (left < right) {
            if (arr[i] + arr[left] + arr[right] === 0) {
                res.push([arr[i], arr[left], arr[right]])
                while (left < right && arr[left] === arr[left + 1]) left++
                    while (left < right && arr[right] === arr[right - 1]) right--
                        left++
                        right--
            } else if (arr[i] + arr[left] + arr[right] < 0) {
                left++
            } else {
                right--
            }

        }
    }
    return [...new Set(res)]
};

function quickSort(nums, left, right) {
    if (left >= right) return
    const mid = quick(nums, left, right)
    quickSort(nums, left, mid - 1)
    quickSort(nums, mid + 1, right)
    return nums
}

function quick(nums, left, right) {
    if (left >= right) return
    let target = nums[left]
    while (left < right) {
        while (left < right && nums[right] >= target) right--
            nums[left] = nums[right]
        while (left < right && nums[left] <= target) left++
            nums[right] = nums[left]
    }
    nums[left] = target
    return left
}

// let nums = [-1, 0, 1, 2, -1, -4]
let nums = [-2, 0, 0, 2, 2]
console.log(threeSum(nums))