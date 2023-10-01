class MyClass {
    static myStaticProp = 42;

    constructor(props) {
        console.log(MyClass.myStaticProp);
    }

}

new MyClass();