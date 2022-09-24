function insertSort(num) {
    if (num.length < 2) {
        return num
    }
    let len = num.length
    for (let i = 1; i < len; i++) {
        let index = i
        for (let j = i - 1; j >= 0; j--) {
            if (num[index] < num[j]) {
                [num[index], num[j]] = [num[j], num[index]]
                index = j
            }
        }
    }
    return num
}
let num = [9, 2, 3, 8, 4, 5, 1]
    // console.log(insertSort(num))
let obj = {
    'a': 1,
    'b': 2,
    'c': 3
}
for (let item in obj) {
    console.log(item, 'item')
}
Object.values(obj).forEach(element => {
    console.log('ele:', element)
});