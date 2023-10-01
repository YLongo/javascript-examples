const co = require('co');
const fs = require('fs');
// const readFile = fs.readFile;
const readFile = require('fs-readfile-promise');


let gen = function* () {
    let f1 = yield readFile('/etc/hosts');
    let f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};

co(gen).then(function () {
    console.log('generator is done');
})