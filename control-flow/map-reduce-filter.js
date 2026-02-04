const arr = [1,2,3,4,5]
let a = arr.filter((curele) =>curele>4);
console.log(a);

let b = arr.reduce((accum,curele) => accum+curele)
console.log(b);

let c = arr.map((curele)=> curele*curele)
console.log(c);

let lib = [
    {
        course : "js",
        price : 10000
    },
        {
        course : "py",
        price : 20000
    },
        {
        course : "java",
        price : 15000
    },
]

const add = lib.reduce((accum,item)=>accum+item.price,0)
console.log(add);
