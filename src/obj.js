let name="yjz";
let age=12;
let obj={name,age}


let key="skill"
let obj1={
    [key]:123,
}

console.log(+0===-0)
console.log(NaN===NaN)
console.log(Object.is(+0,-0))
console.log(Object.is(NaN,NaN))
///===同值相等，
///Object.is严格相等
let a={a:"123"}
let b={b:"456"}
var c=Object.assign(a,b)//组合使用，lodash也使用，R B' R F2 R' B R F2 R2。
// R B' R F2 R' B R F2 R2。
// R B' R F2 R' B R F2 R2
// R  U2  R- U- R  U- R-
// R- U2  R  U  R-  U  R
// R B' R F2 R' B R F2 R2