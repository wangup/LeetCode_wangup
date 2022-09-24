var nums = [9, 3, 4, 2, 6, 1, 8]

function sortQuick(nums) {
    let left = 0,
        right = nums.length - 1
    sortNum(nums, left, right)
    return nums
}

function sortNum(nums, left, right) {
    if (left >= right) return
    let index = quickSort(nums, left, right)
    sortNum(nums, left, index - 1)
    sortNum(nums, index + 1, right)
    return nums
}

function quickSort(nums, left, right) {
    if (left >= right) return
    let target = nums[left]
    while (left < right) {
        while (left < right && target <= nums[right]) right--
            nums[left] = nums[right]
        while (left < right && target >= nums[left]) left++
            nums[right] = nums[left]
    }
    nums[left] = target
    return left
}
console.log(sortQuick(nums))