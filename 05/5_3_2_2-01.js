function asyncOperator(obj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (obj == undefined) {
                reject(`Object is undefined`);
                return;
            }
            resolve(obj);
        }, Math.random() * 1000);
    });
}

asyncOperator(new Object()).then((obj) => {
    obj.name = "John";
    return asyncOperator(obj);
}).then((obj) => {
    obj.sayHello = function() {
        console.log(`Hello, ${obj.name}`);
    };
    return asyncOperator(obj);
}).then((obj) => {
    obj.sayHello();
}).catch((error) => {
    console.log(error);
});

