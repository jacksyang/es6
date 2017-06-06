var {foo,bar} ={
    foo:"aaa",
    bar:"bbb"
}
var {foo,bar} ={
    foo:"aaa",
    bar:"bbb"
}
//赋值
var [foo,bar] =[
    {foo:"aaa"},
    {bar:"bbb"}
]
//还是有区别的
var {foo1,bar1} ={
    test:"aaa",
    bar:"bbb"
}
let a=1;
//let [a]=[1];
//一旦这么赋值以后 切记不可以用｛｝()再赋值；

const [a3,b3]=[1,2]
[a3,b4]=[b3,a3]

class Animal {
    //ES6中新型构造器
    constructor(name) {
        this.name = name;
    }
    //实例方法
    sayName() {
        console.log('My name is '+this.name);
    }
}
Math.trunc(4,3);
Math.sign(3)