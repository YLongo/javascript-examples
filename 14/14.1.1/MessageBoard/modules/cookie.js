module.exports.parse = function (cookiesString) {
    let cookies = {};
    if (!cookiesString) {
        return cookies;
    }

    const tmpList = cookiesString.split(";");
    for (let i = 0; i < tmpList.length; i++) {
        const pair = tmpList[i].split("=");
        cookies[pair[0].trim()] = pair[1];
    }
    return cookies;
}

module.exports.serialize = function(cookies) {
    const pair = new Array();
    for (const name in cookies) {
        pair.push(`${name}=${cookies[name]}`);
    }
    return pair.join(";");
}

