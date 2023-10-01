async function f() {
    await new Promise(function (resolve, reject) {
        throw new Error('出错了');
    });
}

f().then(v => console.log(v))
    .catch(e => console.log(e));