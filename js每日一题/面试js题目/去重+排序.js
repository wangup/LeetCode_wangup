function sortArr(num) {
    num = num.sort()
    return num.filter((item, index) => num.indexOf(item) === index)
}
let num = ['2', 'b', '9', 'a', '7', '3', 'a', '3']
console.log(sortArr(num))

// 快排
function quickSort(num) {
    if (num.length < 2) return num
    let target = num[0]
    let len = num.length
    let left = [],
        right = []
    for (let i = 1; i < len; i++) {
        if (num[i] < target) {
            left.push(num[i])
        } else {
            right.push(num[i])
        }
    }
    return quickSort(left).concat([target], quickSort(right))
}


// 归并排序：最优法，减少空间
function mergeSort(array, left, right, temp) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSort(array, left, mid, temp)
        mergeSort(array, mid + 1, right, temp)
        merge(array, left, right, temp);
    }
    return array;
}

function merge(array, left, right, temp) {
    const mid = Math.floor((left + right) / 2);
    let leftIndex = left;
    let rightIndex = mid + 1;
    let tempIndex = 0;
    while (leftIndex <= mid && rightIndex <= right) {
        if (array[leftIndex] < array[rightIndex]) {
            temp[tempIndex++] = array[leftIndex++]
        } else {
            temp[tempIndex++] = array[rightIndex++]
        }
    }
    while (leftIndex <= mid) {
        temp[tempIndex++] = array[leftIndex++]
    }
    while (rightIndex <= right) {
        temp[tempIndex++] = array[rightIndex++]
    }
    tempIndex = 0;
    for (let i = left; i <= right; i++) {
        array[i] = temp[tempIndex++];
    }
}

console.log(mergeSort(num, 0, num.length - 1, []), 'mergeSort')

function divideSort(num) {
    if (num.length < 2) return num
    let mid = Math.floor(num.length / 2)
    let leftArr = num.slice(0, mid)
    let rightArr = num.slice(mid)

    function divide(left, right) {
        // console.log(left, right)
        let tempArr = []
        while (left.length && right.length) {
            tempArr.push(left[0] <= right[0] ? left.shift() : right.shift())
        }
        while (left.length) {
            tempArr.push(left.shift())
        }
        while (right.length) {
            tempArr.push(right.shift())
        }
        //  这里相当于上面while (left.length)和while (right.length)的逻辑
        // return tempArr.concat(left).concat(right)
        return tempArr
    }
    return divide(divideSort(leftArr), divideSort(rightArr))
}
console.log('divideSort', divideSort(num))