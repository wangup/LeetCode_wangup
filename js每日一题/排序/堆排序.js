class MinHeap {
    constructor() {
            this.heap = []
        }
        // 换位置
    swap(l1, l2) {
            const temp = this.heap[l1]
            this.heap[l1] = this.heap[l2]
            this.heap[l2] = temp
        }
        // 找到父元素
    getParentIndex(index) {
            return Math.floor((index - 1) / 2)
        }
        // 获取左侧子节点
    getLeftIndex(index) {
            return index * 2 + 1
        }
        // 获取右侧子节点
    getRightIndex(index) {
            return index * 2 + 2
        }
        //上（前）移操作
    up(index) {
            // 如果是0就不移动
            if (index === 0) return
            const parentIndex = this.getParentIndex(index)
                // 如果父元素大于当前元素，就开始移动
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index)
                this.up(parentIndex)
            }
        }
        // 下（后）移操作
    down(index) {
            const leftIndex = this.getLeftIndex(index)
            const rightIndex = this.getRightIndex(index)
            if (this.heap[leftIndex] > this.heap[index]) {
                this.swap(leftIndex, index)
                this.down(leftIndex)
            }
            if (this.heap[rightIndex] < this.heap[index]) {
                this.swap(rightIndex, index)
                this.down(rightIndex)
            }
        }
        // 添加元素
    insert(value) {
            this.heap.push(value)
            this.up(this.heap.length - 1)
        }
        // 删除堆顶
    pop() {
            this.heap[0] = this.heap.pop()
            this.down(0)
        }
        // 获取堆顶
    peek() {
            return this.heap[0]
        }
        // 获取长度
    size() {
        return this.heap.length
    }
}

let arr = new MinHeap()
arr.insert(5)
arr.insert(4)
arr.insert(1)
arr.insert(3)
    // arr.pop()
console.log('arr', arr)


let num = [1, 2, 3, 21, 5, 4]
    // 堆排序
function heapSort(num) {
    createHeap(num)
    console.log('createHeap常见的堆顶', num)
        // 父节点最大，因此让父节点先下沉,
        // 让第一个元素与最后一个元素替换，然后确定最后一个元素为目前最大值，将继续遍历寻找剩余最大值
    let len = num.length
    for (let i = len - 1; i > 0; i--) {
        [num[i], num[0]] = [num[0], num[i]]
        adjust(num, 0, i)
    }
    return num
}
// 构建大顶堆，从第一个非叶子节点开始，进行下沉操作
function createHeap(num) {
    // 找到根节点
    const len = num.length
    const start = parseInt(len / 2) - 1
    for (let i = start; i >= 0; i--) {
        adjust(num, i, len)
    }
}

function adjust(num, target, len) {
    // target当做根节点索引，2*target+1是左节点
    for (let i = 2 * target + 1; i < len; i = 2 * i + 1) {
        // 找到最大值的孩子
        if (i + 1 < len && num[i + 1] > num[i]) {
            i = i + 1
        }
        // 最大值的孩子与父节点作比较
        if (num[i] > num[target]) {
            [num[i], num[target]] = [num[target], num[i]]
            target = i
        } else {
            break
        }
    }
}

console.log(heapSort(num))