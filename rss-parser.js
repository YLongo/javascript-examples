let Parser = require('rss-parser');
const {resolve} = require("feedparser/lib/utils");
let parser = new Parser({
    headers: {'Content-type': 'application/json; charset=gbk'},
    customFields: {
        item: ["updated", "published"],
        // entry: ["updated", "published"],
    },
    xml2js: {
        emptyTag: '--EMPTY--',
        builder: {
            xmldec:
                {'version': '1.0', 'encoding': 'UTF-8', 'standalone': true}
        }
    },
});

// (async () => {
//
//     // let feed = await parser.parseURL('https://www.ruanyifeng.com/blog/atom.xml');
//     let feed = await parser.parseURL({url: 'https://blog.codingnow.com/atom.xml', encoding: 'gbk'});
//     console.log(feed.title);
//
//     feed.items.forEach(item => {
//         console.log( item.published + ' : ' + item.updated + ' : ' + item.title + ':' + item.link);
//     });
//
// })();


const options = {headers: {'Content-type': 'application/json; charset=gb2312'}};
fetch('https://blog.codingnow.com/atom.xml', options)
    .then(function (response) {
        return response.arrayBuffer();
    })
    .then(function (buffer) {
        const decoder = new TextDecoder('gb2312');
        return decoder.decode(buffer);
    }).then(text => {
    parser.parseString(text).then((resolve, reject) => {
        if (reject) {
            console.log(reject);
            return;
        }
        resolve.items.forEach(item => {
            console.log(item.published + ' : ' + item.updated + ' : ' + item.title + ':' + item.link);
        });
    });
});

