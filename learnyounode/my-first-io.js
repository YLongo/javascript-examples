const fs = require('fs');

const path = process.argv[2];

const buffer = fs.readFileSync(path);
const data = buffer.toString();
const lines = data.split('\n').length - 1;
console.log(lines);