{
    console.log('正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。');

    async function f() {
        return await 123;
    }

    f().then(v => console.log(v));
}

{
    class Sleep {
        constructor(timeout) {
            this.timeout = timeout;
        }

        then(resolve, reject) {
            const startTime = Date.now();
            setTimeout(
                () => resolve(Date.now() - startTime),
                this.timeout);
        }
    }

    (async () => {
        console.log('sleep start ...');
        const sleepTime = await new Sleep(1000);
        console.log(sleepTime);
        console.log('sleep end ...');
    })();

}

{
    console.log('\n借助await命令就可以让程序停顿指定的时间');
    function sleep(interval) {
        return new Promise(resolve => {
           setTimeout(resolve, interval);
        });
    }

    async function one2FiveInAsync() {
        console.log('start ...');
        for (let i = 0; i < 5; i++) {
            console.log('pending ...', i);
            await sleep(1000);
        }
        console.log('end ...');
    }

    one2FiveInAsync();
}

