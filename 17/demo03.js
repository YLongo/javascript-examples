// Promise 新建后立即执行，所以首先输出的是Promise。
let promise = new Promise(function (resolve, reject) {
   console.log("promise");
   resolve();
});

// then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行,所以最后输出
promise.then(function () {
    console.log("resolved");
})

console.log("Hi");