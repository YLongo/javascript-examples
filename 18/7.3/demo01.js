let arr = ['a', 'b', 'c'];

console.log('pair')
for (let pair of arr.entries()) {
    console.log(pair);
}

console.log('\nkeys')
for (let key of arr.keys()) {
    console.log(key);
}

console.log('\nvalues')
for (let value of arr.values()) {
    console.log(value);
}