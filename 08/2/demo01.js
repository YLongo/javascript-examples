function add(...values) {
    let sum = 0;

    for (let val of values) {
        sum += val;
    }

    return sum;
}

console.log(add(2, 5, 3));