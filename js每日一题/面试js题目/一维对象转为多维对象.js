const input = {
    'a.b.c': 1,
    'a.b.d': 2,
    'a.e': 3,
    'f': 4,
};
const output = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    },
    f: 4
};


function solution(input) {
    let output = {}
    Object.entries(input).forEach(([key, value]) => {
        addKey(key, value, output)
    })
    return output
}

function addKey(input, value, obj) {
    if (!input.includes('.')) {
        obj[input] = value
        return
    }
    let index = input.indexOf('.')
    let leftArr = input.slice(0, index)
    let rightArr = input.slice(index + 1)
    if (!obj[leftArr]) {
        obj[leftArr] = {}
    }
    addKey(rightArr, value, obj[leftArr])
}
console.log(solution(input), 'solution')