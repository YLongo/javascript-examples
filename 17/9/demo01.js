{
    console.log('只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。')
    Promise.any([
        fetch('https://v8.dev/').then(() => 'home'),
        fetch('https://v8.dev/blog').then(() => 'blog'),
        fetch('https://v8.dev/docs').then(() => 'docs')
    ]).then((first) => {
        console.log(first);
    }).catch((error) => {
        console.log(error);
    });
}

{
    console.log('\nPromise.any()不会因为某个 Promise 变成rejected状态而结束，必须等到所有参数 Promise 变成rejected状态才会结束。')

    async function demo() {
        const promises = async () => [
            fetch('/endpoint-a').then(() => 'a'),
            fetch('/endpoint-b').then(() => 'b'),
            fetch('/endpoint-c').then(() => 'c')
        ];

        try {
            const first = await Promise.any(promises);
            console.log(first);
        } catch (error) {
            console.log(error);
        }
    }
}