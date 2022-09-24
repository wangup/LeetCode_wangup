function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let prev = intervals[0];
    //合并重叠区间
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i];
        if (prev[1] < cur[0]) {
            result.push(prev);
            prev = cur;
        } else {
            prev[1] = Math.max(prev[1], cur[1]);
        }
    }
    console.log('prev:', prev)
        //将最后一个区间加入result集合中
    result.push(prev);
    return result;
}
let nums = [
        [10, 30],
        [20, 60],
        [80, 100],
        [150, 180]
    ]
    // let nums = [
    //     [1, 4],
    //     [0, 2],
    //     [3, 5]
    // ]
console.log(merge(nums))

function solution(nums) {
    if (nums.length <= 1) return nums
    let len = nums.length
    let arr = [nums[0]]
    let start = nums[0].length
    let tempS = nums[0][start - 1]
    for (let i = 1; i < len; i++) {
        let nS = nums[i][0]
        let end = nums[i].length
        if (nS <= tempS) {
            // 替换
            arr[i - 1][start - 1] = nums[i][end - 1]
        } else {
            arr.push(nums[i])
        }
        start = nums[i].length
        tempS = nums[i][start - 1]
    }
    return arr
}

// console.log(solution(nums), 'solution')