async function demo11() {
    const promises = [fetch('index.html'), fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')];
    const results = await Promise.allSettled(promises);

    console.log("all settled")
    const successfulPromises = results.filter(p => p.status === 'fulfilled').map(p => console.log('fullfilled'))

    const errors = results.filter(p => p.status === 'rejected').map(p => console.log(p.reason));

}

demo11()

