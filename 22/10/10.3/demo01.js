class A {
    #foo = 0;
    m() {
        console.log(#foo in this);
    }
}

let a = new A();
a.m();