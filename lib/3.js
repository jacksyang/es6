"use strict";

function yjz() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var b = args.map(function (item) {
        return item + 1;
    });
    console.log(b);
    console.log(args);
}
yjz(1, 2, 3);
function yjz1() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    var b = args.forEach(function (item) {
        return item + 1;
    });
    console.log(b);
    console.log(args);
}
yjz1(1, 2, 3
//forEach没有返回值
);