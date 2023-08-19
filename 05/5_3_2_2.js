
function asyncOperator(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Number is", number);
            if (number < 0) {
                reject(`Number is negative ${number}`);
                return;
            }
            resolve(number);
        }, Math.random() * 1000);
    });
}

// asyncOperator(1).then((number) => {
//     console.log("Number is positive", number);
// }, (error) => {
//     console.log(error);
// });

// asyncOperator(-1).then((number) => {
//     console.log(number);
// }, (error) => {
//     console.log(error);
// });


console.log("All promises are created");
let promises = new Array();

for (let i = 0; i < 10; i++) {
    promises.push(asyncOperator(i));
}

// Promise.all(promises).then(() => {
//     console.log("promises log ... ...");
//     console.log("All promises are resolved");
// });

// 只要有一个异步操作返回了reject，Promise.all()就会返回reject,交由catch()处理
// promises.push(Promise.reject("Error"));

// data数组存储了每个异步操作的返回值，并且按照异步操作的顺序排列
// Promise.all(promises).then((data) => {
//     console.log("promises log with return data ... ...");
//     for (const item of data) {
//         console.log(item);
//     }
//     console.log("All promises are resolved");
// })
// .catch((error) => {
//     console.log("promises log with return data ... ...");
//     console.log("promises log with error ... ...");
//     console.log(error);
//     console.log("All promises are resolved");
// });

// 获取最先返回的异步操作的返回值
// Promise.race(promises).then((data) => {
//     console.log(data);
//     console.log("All promises are resolved");
// })
// .catch((error) => {
//     console.log(error);
//     console.log("All promises are resolved");
// });


async function asyncOperator2(number) {
    const msg = await asyncOperator(number);
    console.log("asyncOperator2", msg);
}

asyncOperator2(1);