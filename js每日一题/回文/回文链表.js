// 1.找到链表的中点
// 2.将后半部的反转
// 3.循环遍历后半部，比较前半部分和后半部分的val是否一样

var isPalindrome = function(head) {
    // 边界情况判断：链表为空或者只有一个节点的情况，属于回文链表
    if (!head || !head.next) return true
        // 链表只有两个节点的时候,判断这两个节点是否相等
    if (!head.next.next) return head.val === head.next.val
    let fast = head
    let slow = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // slow指向的那个节点把链表分为两个区域，翻转有区域的链表
    // 获取右区域翻转之后的头节点
    let cur = slow.next
    let pre = null
    while (cur) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    let right = pre
    let left = head
    while (right) {
        if (left.val !== right.val) {
            return false
        } else {
            right = right.next
            left = left.next
        }
    }
    return true
}