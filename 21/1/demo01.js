const fs = require('fs');

const reafFile = function (fileName) {
    return new Promise(function (resolve, reject) {
       fs.readFile(fileName, function (err, data) {
           if (err) {
               return reject(err);
           }

           resolve(data);
       });
    });
};

const gen = function* () {
    const f1 = yield reafFile('/etc/hosts');
    console.log(f1);

    const f2 = yield reafFile('/etc/shells');
    console.log(f2);
};

console.log('以上函数可以改造成如下形式');

const asyncReadFile = async function() {
    console.log('2')
    const f1 = await reafFile('/etc/hosts');
    const f2 = await reafFile('/etc/shells');

    console.log(f1);
    console.log(f2);

    return 3;
}

console.log(1)
asyncReadFile().then(r => console.log(r));