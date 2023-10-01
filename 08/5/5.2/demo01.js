console.log('箭头函数没有自己的this对象\n')
{
    function foo() {
        setTimeout(() => {
            console.log('id:', this.id);
        }, 100);
    }

    let id = 21;
    foo.call({id: 42});
}

{
    function Timer() {
        this.s1 = 0;
        this.s2 = 0;

        setInterval(() => this.s1++, 1000);

        setInterval(function () {
            this.s2++;
        }, 1000);
    }

    let timer = new Timer();

    setTimeout(() => console.log('s1:', timer.s1), 3000);
    setTimeout(() => console.log('s2:', timer.s2), 3000);
}
