const fs = require('fs');
const Watcher = require('./2-13.js');

const watcher = new Watcher('./watch', './done');
watcher.on('process', (file) => {
    const watchFile = `${watcher.watchDir}/${file}`;
    const processedFile = `${watcher.processedDir}/${file.toLowerCase()}`;

    fs.rename(watchFile, processedFile, (err) => {
        if (err) throw err;
        console.log(`Moved ${watchFile} to ${processedFile}`)
    });
});

watcher.start();