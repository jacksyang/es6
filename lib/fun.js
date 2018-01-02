"use strict";

function add(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return a + b;
}
console.log(add(1));