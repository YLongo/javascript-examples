const thunkify = require('thunkify');
const fs = require('fs');

{
    console.log('Thunkify 模块')

    const read = thunkify(fs.readFile);
    read('./../../../package.json')(function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data.toString());
    })
}

{
    function f(a, b, callback) {
        let sum = a + b;

        console.log('thunkify会确保下面两条语句只执行一次');
        callback(sum);
        callback(sum);
    }

    let ft = thunkify(f);
    let print = console.log.bind(console);

    ft(1, 2)(print);
}
