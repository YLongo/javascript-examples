const readFile = require('fs-readfile-promise');

readFile('/etc/passwd').then(function (data) {
    console.log(data.toString());
}).then(function () {
    return readFile('/etc/hosts');
}).then(function (data) {
    console.log(data.toString());
}).catch(function (err) {
    console.log(err);
});