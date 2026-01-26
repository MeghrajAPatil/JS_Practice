let a = [1,0,2,0,3,-1,-3]
let nz = []
let z =[]
let n =[]
nz = a.filter(num => num>0)
z = a.filter(num => num==0)
n = a.filter(num => num<0)
let b = [].concat(n,...z)
let c = [].concat(b,...nz)
console.log(c);
console.log(a.includes(5));
const d = a.join()
console.log(typeof d);
let e = 200;
let f = 300;
let g = 400;
console.log(Array.of(e,f,g));

