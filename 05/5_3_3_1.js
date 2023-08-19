
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

async function test() {
    let promises = new Array();

    for (let i = 0; i < 10; i++) {
        promises.push(asyncOperator(i));
    }

    try {
        console.log("Promise.all ... ...");
        const data = await Promise.all(promises);
        for (const item of data) {
            console.log(item);
        }

        // console.log("Promise.reject ... ...");
        // const msg = await Promise.race(promises);
        // console.log("the first promise reject is", msg);
    } catch (error) {
        console.log("error is", error);
    }
}

test();