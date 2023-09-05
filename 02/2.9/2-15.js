function asyncFunction(callback) {
    setTimeout(callback, 200);
}

let color = 'blue';

// 闭包, 用匿名函数保留全局变量color的值
(color => {
    asyncFunction(() => {
        // 输出：The color is blue
        console.log(`The color is ${color}`);
    });
})(color);

color = 'green';