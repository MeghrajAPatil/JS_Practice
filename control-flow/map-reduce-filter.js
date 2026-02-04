const arr = [1,2,3,4,5]
let a = arr.filter((curele) =>curele>4);
console.log(a);

let b = arr.reduce((accum,curele) => accum+curele)
console.log(b);

let c = arr.map((curele)=> curele*curele)
console.log(c);

