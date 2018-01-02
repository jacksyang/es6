/**
 * Created by hdb on 2017/6/26.
 */
let a=1;
console.log(Number.isFinite(a));
console.log(Number.isNaN(a));
console.log(Number.isInteger(a))

console.log(0B01010)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.isSafeInteger(123123));
//字符串最大安全数字，和最小安全数字，一般超过这个范围会转成 字符串再进行展示