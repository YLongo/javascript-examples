const promise = new Promise(function (resolve, reject) {
   if (true) {
       resolve(value);
   } else {
       reject(error);
   }
});

// value与error分别来自promise中resolve与reject传递多来的对象
// 这两个函数都是可选的
promise.then(function (value) {

}, function (error) {

});