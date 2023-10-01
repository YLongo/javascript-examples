{
    const p = Promise.reject('出错了');

    p.then(null, function (s) {
        console.log(s);
    });
}