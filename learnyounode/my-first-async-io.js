const fs = require('fs');

const path = process.argv[2];

fs.readFile(path, function (err, buffer) {
   if (err) {
       console.error(err);
       return;
   }

   const data = buffer.toString();
   const lines = data.split('\n').length - 1;
    console.log(lines);
});