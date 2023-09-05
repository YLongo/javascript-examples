function asyncFunction(callback) {
    setTimeout(callback, 200);
}

let color = 'blue';
asyncFunction(() => {
    // 输出：The color is green
    console.log(`The color is ${color}`);
});
color = 'green'