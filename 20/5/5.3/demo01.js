let fs = require('fs');

let readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
       fs.readFile(fileName, function (error, data) {
           if (error) return reject(error);
           resolve(data);
       });
    });
};

let gen = function* () {
    let f1 = yield readFile('/etc/hosts');
    let f2 = yield readFile('/etc/shells');

    console.log(f1);
    console.log(f2);
};

let  g = gen();
g.next().value.then(function (data) {
    g.next(data).value.then(function (data) {
        g.next(data);
    });
});