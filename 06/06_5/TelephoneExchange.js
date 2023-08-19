class TelephoneExchange {

    constructor(names) {
        this.map = new Map();
        this.firstNum = 1001;

        for (let name of names) {
            this.firstNum++;
            this.map.set(this.firstNum, name);
        }
    }

    add(name) {
        this.firstNum++;
        this.map.set(this.firstNum, name);
    }

    delete(num) {
        this.map.delete(num);
    }

    update(num, name) {
        if (this.map.has(num)) {
            this.map.set(num, name);
        } else {
            console.log("No such number");
        }
    }

    call(number) {
        const me = this;
        return new Promise(function (resolve, reject) {
            const time = Math.random() * 5000;
            setTimeout(() => {
                if (me.map.has(number)) {
                    let name = me.map.get(number);
                    if (time > 3000) {
                        resolve("呼叫超时");
                    } else {
                        resolve("正在呼叫" + name);
                    }
                } else {
                    resolve("无此号码", number);
                }
            }, time);
        }).then(function (msg) {
            console.log(msg);
        });
    }

    async callAll() {
        console.log("call all ... ...");
        const promises = new Array();
        for (let number of this.map.keys()) {
            promises.push(this.call(number));
        }
        return await Promise.all(promises).then(function() {
            console.log("call all done");
        });
    }
};

async function testTelephoneExchange(phoneExch) {
    await phoneExch.callAll();

    phoneExch.add("张三");
    await phoneExch.callAll();

    phoneExch.delete(1002);
    await phoneExch.callAll();

    phoneExch.update(1003, '李四');
    await phoneExch.callAll();
}

export {TelephoneExchange, testTelephoneExchange};
