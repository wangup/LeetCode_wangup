let num = [1, 2, 2, 3, 4, 5, 5, 5, 5, 6]

function solution(num, target) {
    let start = firstRange(num, target)
    let end = lastRange(num, target)
    return end - start + 1
}

function firstRange(num, target) {
    let left = 0
    let right = num.length - 1
        // 取第一个数
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (num[mid] === target) {
            // while (mid > 0 && num[mid - 1] === num[mid]) {
            //     mid--
            // }
            // return mid
            if (mid > 0 && num[mid - 1] === num[mid]) {
                // mid往左缩，为了寻找mid的左边的索引
                right = mid
            } else {
                return mid
            }
        } else if (num[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
}

function lastRange(num, target) {
    let left = 0
    let right = num.length - 1
        // 最后一个数
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (num[mid] === target) {
            if (mid < num.length - 1 && num[mid + 1] === num[mid]) {

                left = mid
            } else {
                return mid
            }
        } else if (num[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
}
console.log(lastRange(num, 5))
console.log(firstRange(num, 5))
console.log(solution(num, 5))