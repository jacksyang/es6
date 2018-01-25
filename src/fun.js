function add(a,b=2){
    return a+b

}
console.log(add(1))

var add1=(a,b=1)=>{
    return a+b;
}
add1(1)


let arr=["js","技术","前端"]
var fun=(a,b,c)=>{
    console.log(a,b,c)

}
fun(...arr)


var a={a:1,b:2}
console.log('a' in a);

let arr4=[1,2,3,,,,]
console.log(5 in arr4)//第一个这个是index，如果是空位返回false，

//遍历数组 map,forEach,some,filter