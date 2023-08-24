import { TelephoneExchange } from "./TelephoneExchange.js";

function getElement(query) {
    if (typeof document.querySelector == "function") {
        return document.querySelector(query);
    } else {
        switch (query[0]) {
            case "#":
                return document.getElementById(query.substring(1));
            case ".":
                return document.getElementsByClassName(query.substring(1))[0];
            default:
                return document.getElementsByTagName(query)[0];
        }
    }
}

const phoneExch = new TelephoneExchange(["张三", "李四", "王五", "赵六"]);
const btns = new Array();

function addBtn(key, name) {
    const item = document.createElement("li");
    const btn = document.createElement("input");
    btn.type = "button";
    btn.className = "callme";
    btn.id = key;
    btn.value = name;

    btn.addEventListener("click", async function () {
        const status = await phoneExch.call(key);
        switch (status) {
            case 1:
                this.style.backgroundColor = "green";
                break;
            case 2:
                this.style.backgroundColor = "yellow";
                break;
            case 3:
                this.style.backgroundColor = "red";
                break;
        }
    }, false);

    btn.addEventListener("dblclick", function () {
        for (let i = 0; i < btns.length; i++) {
            if (this.id === btns[i].id) {
                const item = btns[i].parentNode;
                callList.removeChild(item);
            }
        }
        phoneExch.delete(this.id);
    }, false);

    item.appendChild(btn);
    btns.push(btn);
    callList.appendChild(item);
}

const callList = document.getElementById("callList");
for (const [key, name] of phoneExch.map.entries()) {
    addBtn(key, name);
}

const addUser = getElement('#addUser');
addUser.addEventListener("click", function () {
    const name = prompt("请输入用户名");
    if (name != null) {
        const key = phoneExch.add(name);
        addBtn(key, name);
    }
}, false);

const callAll = getElement('#callAll');
callAll.addEventListener("click", function () {
    for (let i = 0; i < btns.length; i++) {
        btns[i].click();
    }    
}, false);


