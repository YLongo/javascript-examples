{
    const promise = Promise.resolve('foo');
    promise.then((data) => console.log(data));
}

{
    console.log('参数是一个thenable对象');

    let thenable = {
        then: function (resolve, reject) {
            resolve(2);
        }
    };

    let p1 = Promise.resolve(thenable);
    p1.then(function (value) {
        console.log(value);
    });
}


{
    console.log('\n不带有任何参数');

    const p = Promise.resolve();

    p.then(function () {

    });


}
