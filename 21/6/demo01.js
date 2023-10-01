const urls = ['https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty',
    'https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty'];

{
    console.log('同步执行一组url');
    async function logInOrder(urls) {
        for (let url of urls) {
            const response = await fetch(url);
            console.log(await response.text());
        }
    }

    // logInOrder(urls);
}

{
    console.log('\n异步执行一组url');
    async function logInOrder(urls) {
        const textPromises = urls.map(async url => {
            const response = await fetch(url);
            return response.text();
        });

        for (let textPromise of textPromises) {
            console.log(await textPromise);
        }
    }

    logInOrder(urls);
}