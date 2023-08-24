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

let phoneExch = new TelephoneExchange();
let btns = null;

function createXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        throw new Error("XMLHttpRequest is not supported");
    }
}

function ajax_get(url, useData) {
    const xhr = createXMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                useData(xhr.response);
            } else {
                throw new Error("ajax_get error");
            }
        }
    }
}

function ajax_post(url, jsonData, useData) {
    const xhr = createXMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send(JSON.stringify(jsonData));
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                useData(xhr.response);
            } else {
                throw new Error("ajax_post error");
            }
        }
    }
}

function addBtn(number, name) {
    const item = document.createElement("li");
    const btn = document.createElement("input");
    btn.type = "button";
    btn.className = "callme";
    btn.id = number;
    btn.value = name;

    btn.addEventListener("click", async function () {
        // 在macos touchpad上，双击会触发单击事件
        console.log('add btn click callme', this.id);
        const status = await phoneExch.call(number);
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

        const tempMap = phoneExch.delete(number);
        let jsonObj = new Array();
        for (const [key, value] of tempMap) {
            jsonObj.push({ "name": value, "number": key });
        }
        ajax_post("/data", jsonObj, null);

    }, false);

    item.appendChild(btn);
    btns.push(btn);
    callList.appendChild(item);
}

function createPhoneExchange() {
    return new Promise(function(resolve, reject) {
        ajax_get("/data", function (data) {
            const userList = JSON.parse(data);
            phoneExch = new TelephoneExchange(userList);
            resolve();
        });
    }).then(function () {
        btns = new Array();
        for (const [number, name] of phoneExch.map.entries()) {
            addBtn(number, name);
        }

        const addUser = getElement('#addUser');
        addUser.addEventListener("click", function () {
            const name = prompt("请输入用户名");
            if (name != null) {
                const [tempMap, newNumber] = phoneExch.add(name);
                addBtn(newNumber, name);
                let jsonObj = new Array();
                for (const [number, value] of tempMap) {
                    jsonObj.push({ "name": value, "number": number });
                }
                ajax_post("/data", jsonObj, null);
            }
        }, false);
    });
}

// const callList = document.getElementById("callList");
// for (const [key, name] of phoneExch.map.entries()) {
//     addBtn(key, name);
// }

// const addUser = getElement('#addUser');
// addUser.addEventListener("click", function () {
//     const name = prompt("请输入用户名");
//     if (name != null) {
//         const key = phoneExch.add(name);
//         addBtn(key, name);
//     }
// }, false);

const callAll = getElement('#callAll');
callAll.addEventListener("click", function () {
    for (let i = 0; i < btns.length; i++) {
        console.log('callAll', btns[i].id); 
        btns[i].click();
    }    
}, false);

createPhoneExchange();


