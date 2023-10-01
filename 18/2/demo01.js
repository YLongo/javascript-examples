console.log('Symbol.iterator属性')
{
    const obj = {
        [Symbol.iterator]: function () {
            return {
                next: function () {
                    return {
                        value: 1,
                        done: true
                    };
                }
            };
        }
    };

    const ite = obj[Symbol.iterator]();
    console.log(ite.next())
}

{
    let arr = ['a', 'b', 'c'];
    let iter = arr[Symbol.iterator]();

    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
}