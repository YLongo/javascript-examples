const fs = require('fs');
const file = 'package.json';

fs.access(file, fs.constants.F_OK, function(err) {
    console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);

fs.readFile(file, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(`${file} contents: ${data}`);
    }
});

const data = {
    name: 'Node.js Package',
    description: 'Node.js package file',
    keywords: ['node', 'package']
};
fs.writeFile(file, JSON.stringify(data), function(err) {
    if (err) {
        console.log('Error writing file', err);
    } else {
        console.log(`Saved ${file}`);
    }
});