console.log('静态方法')
class Foo {
    static classMethod() {
        return 'hello';
    }
}

console.log(Foo.classMethod());