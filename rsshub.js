const RSSHub = require('rsshub');

RSSHub.init({
    // config
});

RSSHub.request('http://feeds.feedburner.com/ruanyifeng')
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    });