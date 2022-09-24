function solution(num) {
    let len = num.length
    let slow = 0
    for (let i = 0; i < len; i++) {
        if (i >= slow) {
            if (num[i] !== 0) {
                num[slow++] = num[i]
            }
        }
    }
    while (slow < len) {
        num[slow++] = 0
    }
    return num
}
let num = [3, 0, 1, 4, 0, 0, 9, 0, 2]
console.log(solution(num))