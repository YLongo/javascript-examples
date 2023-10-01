{
    async function f() {
        await Promise.reject('出错了');
    }

    f().then(v => console.log(v))
        .catch(e => console.log(e));
}

{
    async function f() {
        await Promise.reject('出错了');
        await Promise.resolve('hello world');
    }

    f().then(v => console.log(v))
        .catch(e => console.log(e));
}

{
    async function f() {
        await Promise.reject('出错了').catch(e => console.log(e));
        return await Promise.resolve('hello world');
    }

    f().then(v => console.log(v));
}