const fs = require('fs');

fs.readFile('/etc/passwd', 'utf-08', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});