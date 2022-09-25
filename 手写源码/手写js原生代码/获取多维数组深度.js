Array.prototype.getLevel = function() {
    let max = 1
    for (const item of this) {
        if (Array.isArray(item)) {
            const depth = item.getLevel() + 1
            if (max < depth) {
                max = depth
            }
        }
    }
    return max
}
const a1 = [1, 2, [1],
    [1, [2, [3]]]
]
console.log(a1.getLevel())