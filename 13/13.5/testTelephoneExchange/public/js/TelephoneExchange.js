class TelephoneExchange {
    constructor(data) {

        if (data === undefined) {
            return null;
        }
        
        this.map = new Map();
        this.firstNum = 1000;

        for (let item of data) {
            const number = parseInt(item.number);
            if (this.firstNum < number) {
                this.firstNum = number;
            }
            this.map.set(this.firstNum, item.name);
        }
    }

    add(name) {
        this.firstNum++;
        this.map.set(this.firstNum, name);
        return [this.map, this.firstNum];
    }

    delete(num) {
        this.map.delete(num);
        return this.map;
    }

    update(number, name) {
        if (this.map.has(number)) {
            this.map.set(number, name);
        } else {
            console.log("No such number");
        }
        return this.map;
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
        return await Promise.all(promises).then(function () {
            console.log("call all done");
        });
    }
}

async function testTelephoneExchange(phoneExch) {
    await phoneExch.callAll();

    phoneExch.add("张三");
    await phoneExch.callAll();

    phoneExch.delete(1002);
    await phoneExch.callAll();

    phoneExch.update(1003, "李四");
    await phoneExch.callAll();
}

export { TelephoneExchange, testTelephoneExchange };
