let arr = [1,-2,3,-4]
let a = arr.filter((num)=>num<0).map((curele)=> curele+ (2*( - curele))).reduce((accum,curele)=> accum+curele)
console.log(a);
