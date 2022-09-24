function merge(A, m, B, n) {
    // write code here
    if (m === 0) {
        return B
    }
    if (n === 0) {
        return A
    }
    let c = [],
        i = 0,
        a = 0,
        b = 0
    while (n > 0 && m > 0) {
        if (A[a] > B[b]) {
            c[i++] = B[b++]
            n--
        } else {
            c[i++] = A[a++]
            m--
        }
    }
    while (n > 0) {
        c[i++] = B[b++]
        n--
    }
    while (m > 0) {
        c[i++] = A[a++]
        m--
    }
    return c
}
let A = [4, 5, 6],
    B = [1, 2, 3]
let m = A.length,
    n = B.length
console.log(merge(A, m, B, n))