async function getTitle(url) {
    let response = await fetch(url);
    let html = await response.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[0];
}

getTitle('https://tc39.github.io/ecma262/').then(console.log);