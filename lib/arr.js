"use strict";

/**
 * Created by hdb on 2017/6/26.
 */
var arr1 = ["www", "yjz", "com"];
var arr2 = arr1;
var arr3 = [].concat(arr1);
arr3.push("123");
console.log(arr1, arr2, arr3);