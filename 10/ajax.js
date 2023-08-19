function createXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        // Chrome、Firefox、Safari、IE7+ ...
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // IE6 及更老版本的 IE 浏览器
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        throw new Error("你的浏览器不支持 XMLHttpRequest 对象！");
    }
}

function ajax_get(url, useData) {
    const xhr = createXMLHttpRequest(); // 此处依然使用之前封装的创建函数
    xhr.open("GET", url, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                useData(xhr.response);
            } else {
                throw new Error("请求数据失败！");
            }
        }
    };
}

function ajax_post(url, sendData, useData) {
    const xhr = createXMLHttpRequest(); // 此处依然使用之前封装的创建函数
    xhr.open("POST", url, true);
    xhr.send(sendData);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                useData(xhr.response);
            } else {
                throw new Error("请求数据失败！");
            }
        }
    };
}


export {ajax_get, ajax_post};