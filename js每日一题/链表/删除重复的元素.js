function findKth(a, n, K) {
    // write code here
    let nums = quickSort(a)
    return nums[n - K - 1]

}

function quickSort(nums) {
    if (nums.length < 2) {
        return nums;
    }
    let target = nums[0]
    let left = [],
        right = []
    let len = nums.length
    for (let i = 1; i < len; i++) {
        if (nums[i] > target) {
            right.push(nums[i])
        } else {
            left.push(nums[i])
        }
    }
    return quickSort(left).concat([target], quickSort(right))
}
let a = [10, 10, 9, 9, 8, 7, 5, 6, 4, 3, 4, 2],
    n = 12,
    k = 3
console.log(findKth(a, n, k))