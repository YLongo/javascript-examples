const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const endWith = process.argv[3];

fs.readdir(dir, function (err, files) {
    files.filter(f => path.extname(f).endsWith(endWith)).forEach(f => console.log(f));
})