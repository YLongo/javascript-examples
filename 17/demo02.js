function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

// 3000ms之后触发执行
timeout(3000).then(value => {
    console.log(value)
})

