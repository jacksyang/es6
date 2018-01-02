"use strict";

var _foo$ary = { foo: 1, ary: 1 },
    foo = _foo$ary.foo,
    ary = _foo$ary.ary;

console.log(foo);
console.log(ary);

var newObj = void 0;

//之前赋值的 要想用这种方式赋值，必须加个括号。
var _newObj = { newObj: 123 };
newObj = _newObj.newObj;
_newObj;