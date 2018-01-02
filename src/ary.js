let arr=[123,123,4];
// for (let item of arr.keys()){
//     console.log(item);
// }
// for (let item of arr.entries()){
//     console.log(item);
// }
for (let [ite,ind] of arr.entries()){
    console.log(ite,ind);
}
for (let [ind,ite] of arr.entries()){
    console.log(ite,ind);

}
//第一个括号是index；