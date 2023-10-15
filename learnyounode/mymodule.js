const fs = require('fs');
const path = require('path');


module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            // console.log(err);
            callback(err);
            return;
        }
        const filter = files.filter(f => path.extname(f).endsWith(ext));
        callback(null, filter);
    })
}