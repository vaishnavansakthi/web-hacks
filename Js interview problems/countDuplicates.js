// using for loop
function countDuplicates(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}
console.log(countDuplicates([3, 4, 2, 6, 1, 2, 4, 4, 2, 1]));

//using while loop
function countDuplicates(arr) {
    let obj = {};
    let i = 0;
    while (i < arr.length) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
        i++;
    }
    return obj;
}
console.log(countDuplicates([3, 4, 2, 6, 1, 2, 4, 4, 2, 1]));

// using array method reduce
function countDuplicates(arr) {
    return arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {})
}
console.log(countDuplicates([3, 4, 2, 6, 1, 2, 4, 4, 2, 1]));