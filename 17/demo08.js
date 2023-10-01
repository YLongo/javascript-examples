const someAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        resolve(x + 2);
    });
};

someAsyncThing().then(function () {
    console.log('everything is great');
});

// 在浏览器环境执行会输出，直接运行不会输出
setTimeout(() => {console.log(123)}, 2000);

