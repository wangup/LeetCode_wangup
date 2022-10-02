function ListNode(x) {
    this.val = x
    this.next = null
}

function reverseKGroup(head, k) {
    let dummy = new ListNode(null)
    dummy.next = head
    let pre = dummy
    let cur = dummy

    while (cur) {
        for (let i = 0; i < k && cur !== null; i++) {
            cur = cur.next
        }
        if (cur === null || k <= 1) break
        let left = pre.next
        let tempList = cur.next
        let [list, p] = reverseList(left, cur)
        pre.next = list
        p.next = tempList
        pre = p
        cur = pre
    }
    return dummy.next
}

// 局部反转,反转从位置 a 到位置 b 的链表节点
function reverseList(a, b) {
    let pre = b.next
    let p = a
    while (pre !== b) {
        let temp = p.next
        p.next = pre
        pre = p
        p = temp
    }
    // pre为反转的链表，a为反转后的最后一个节点
    return [pre, a]
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)
const n5 = new ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = null

console.log(reverseKGroup(n1, 2))
    // console.log(reverseList(n1))