"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _foo$bar = {
    foo: "aaa",
    bar: "bbb"
},
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;
var _foo$bar2 = {
    foo: "aaa",
    bar: "bbb"
    //赋值
},
    foo = _foo$bar2.foo,
    bar = _foo$bar2.bar;
var foo = { foo: "aaa" },
    bar = { bar: "bbb" };
//还是有区别的

var _test$bar = {
    test: "aaa",
    bar: "bbb"
},
    foo1 = _test$bar.foo1,
    bar1 = _test$bar.bar1;

var a = 1;
//let [a]=[1];
//一旦这么赋值以后 切记不可以用｛｝()再赋值；

var _ref = [1, 2][(a3, b4)] = [b3, a3],
    _ref2 = _slicedToArray(_ref, 2),
    a3 = _ref2[0],
    b3 = _ref2[1];

var Animal = function () {
    //ES6中新型构造器
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
    }
    //实例方法


    _createClass(Animal, [{
        key: "sayName",
        value: function sayName() {
            console.log('My name is ' + this.name);
        }
    }]);

    return Animal;
}();

Math.trunc(4, 3);
Math.sign(3);