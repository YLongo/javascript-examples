import fetch from 'node-fetch';

function* gen() {
    let url = 'https://api.github.com/users/ruanyf';
    let result = yield fetch(url);
    console.log(result.login);
}

let g = gen();
let result = g.next();
console.log('result:', result);

result.value.then(function (data) {
    const json = data.json();
    console.log('json:', json);
    return json;
}).then(function (data) {
    console.log('data:', JSON.stringify(data));
    g.next(data);
});