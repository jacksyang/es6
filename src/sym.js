let a=Symbol("123");
console.log(a);
console.log(a.toString())
let obj={
    name:123,
    skill:"js"
}
let age=Symbol();
obj[age]=18;
for( let ind in obj){
    console.log(obj[ind]);
}
console.log(obj[age])
