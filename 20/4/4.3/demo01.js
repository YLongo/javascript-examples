const fs = require('fs');

{
    console.log('Thunk函数')
    let thunk = function (fileName) {
        return function (callback) {
            return fs.readFile(fileName, callback);
        };
    };

    thunk('/etc/passwd')(function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(data.toString());
    });
}

{
    console.log('\nES6版本 => Thunk 函数转换器');

    const thunk = function (fn) {
        return function (...args) {
            return function (callback) {
                return fn.call(this, ...args, callback);
            }
        };
    };

    const readFileThunk = thunk(fs.readFile);
    readFileThunk('/etc/passwd')(function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data.toString());
    });
}