{
    console.log('示例')
    async function getStockPriceByName(name) {
        console.log(1);
        const symbol = await getStockSymbol(name);
        console.log(2);
        let stockPrice = await getStockPrice(symbol);
        console.log(3);
        return stockPrice;
    }

    const getStockSymbol = async function (name) {
        return 'G';
    }

    async function getStockPrice(symbol) {
        return 100;
    }

    console.log(0);
    getStockPriceByName('goog').then(function (result) {
        console.log(result);
    });
    console.log(4);
}

{
    console.log('\n指定多少毫秒后输出一个值');

    function timeout(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    async function asyncPrint(value, ms) {
        await timeout(ms);
        console.log(value);
    }

    asyncPrint('hello world', 3000);
}