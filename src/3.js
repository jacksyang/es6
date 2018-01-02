function yjz(...args){
    let b=args.map(item=>{
        return item+1;
    })
    console.log(b);
    console.log(args)

}
yjz(1,2,3)
function yjz1(...args){
    let b=args.forEach(item=>{
        return item+1;
    })
    console.log(b);
    console.log(args)

}
yjz1(1,2,3)
//forEach没有返回值