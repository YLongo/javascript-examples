const fs = require('fs')
const tasks = [];
const wordCounts = {};
const filesDir = './text';
let completedTasks = 0;

function checkIfComplete() {
    completedTasks++;
    if (completedTasks === tasks.length) {
        for (let index in wordCounts) {
            // 当所有任务全部完成后，列出文件中用到的每个单词以及用了多少次
            console.log(`${index}: ${wordCounts[index]}`);
        }
    }
}

function addWordCount(word) {
    wordCounts[word] = (wordCounts[word]) ? wordCounts[word] + 1 : 1;
}

function countWordsInText(text) {
    const words = text.toString().toLowerCase().split(/\W+/).sort();
    words.filter(word => word).forEach(word => addWordCount(word));
}

fs.readdir(filesDir, (err, files) => {
    if (err) throw err;
    if (files.length === 0) {
        console.log('No files to process');
    }
    files.forEach(file => {
        const task = (file => {
            return () => {
                fs.readFile(file, (err, text) => {
                    if (err) throw err;
                    countWordsInText(text);
                    checkIfComplete();
                });
            };
        })(`${filesDir}/${file}`);
        tasks.push(task);
    });

    tasks.forEach(task => task());
});