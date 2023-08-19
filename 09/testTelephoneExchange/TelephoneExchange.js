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
        return this.firstNum;
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
            const time = Math.random() * 3000;
            setTimeout(() => {
                if (me.map.has(number)) {
                    let name = me.map.get(number);
                    if (time > 1000) {
                        console.log("呼叫超时");
                        resolve(2);
                    } else {
                        console.log("呼叫成功", name);
                        resolve(1);
                    }
                } else {
                    console.log(number, "号码不存在");
                    resolve(3);
                }
            }, time);
        }).then(function (status) {
            return status;
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
