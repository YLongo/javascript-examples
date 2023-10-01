let fs = require('fs');

let readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

console.log('基于 Promise 对象的自动执行');

let gen = function* () {
    let f1 = yield readFile('/etc/hosts');
    let f2 = yield readFile('/etc/shells');

    console.log(f1);
    console.log(f2);
};

function run(gen) {
    let g = gen();

    function next(data) {
        let result = g.next(data);
        if (result.done) {
            return result.value;
        }

        result.value.then(function (data) {
            next(data);
        });
    }

    next();
}

run(gen);