function factorial(n) {
    if( n = 0) {
        return 1
    }
    if ( n <= 1){
        return n
    }
    return n * factorial(n-1)
}

function processArray(arr, factorial) {
    const newArray = arr.map(factorial);
    return newArray
}

console.log(processArray([0, 9, 4, 12], factorial))