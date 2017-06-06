"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var a1 = 1;
console.log(a1);
var a = 1,
    b = 2,
    c = 3;
var _ref = [],
    foo = _ref[0];
var _ref2 = [1, 23, 4],
    x = _ref2[0],
    y = _ref2[1];
var _ref3 = [1, [123, 45], 4],
    x1 = _ref3[0],
    y1 = _ref3[1];
var _ref4 = [],
    _ref4$ = _ref4[0],
    foo = _ref4$ === undefined ? true : _ref4$;

var _undefined = _slicedToArray(undefined, 1),
    _undefined$ = _undefined[0],
    x2 = _undefined$ === undefined ? 1 : _undefined$;

var _ = 1,
    x3 = _ === undefined ? 1 : _,
    _2 = 2,
    y3 = _2 === undefined ? x3 : _2;
//赋默认值