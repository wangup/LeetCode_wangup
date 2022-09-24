// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 两轮遍历
var moveZeroes = function(nums) {
        let len = nums.length
        let left = 0,
            right = len - 1
        for (let i = 0; i < len; i++) {
            if (nums[i]) {
                nums[left++] = nums[i]
            } else {
                continue
            }
        }
        for (let i = left; i <= right; i++) {
            nums[i] = 0
        }
        return nums
    }
    // let nums = [0, 1, 0, 3, 12] //[1,3,12,0,0]
    // let nums = [0] // [0]
let nums = [0, 0, 3]
console.log(moveZeroes(nums))


// 一轮遍历，思路：值为非0的放在数组末尾，用双指针
function move(nums) {
    let start = 0
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i]) {
            // 前面的指针大于start的指针时，它一定会是0
            if (i > start) {
                nums[start] = nums[i]
                nums[i] = 0
            }
            start++
        }
    }
    return nums
}