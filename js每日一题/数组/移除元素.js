let num = [2, 3, 3, 4, 6, 4, 7]

function solution(num, val) {
    let slow = 0
    for (let fast = 0; fast < num.length; fast++) {
        if (num[fast] != val) {
            num[slow++] = num[fast]
        }
    }
    return
}
console.log(solution(num, 3))