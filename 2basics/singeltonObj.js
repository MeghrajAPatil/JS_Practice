const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);
console.log(obj1 === obj3);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(obj1.hasOwnProperty('3'));

const clg = {
    name : "KLE",
    field : "AI",
    typeof : "Management"
}
const {typeof : type} = clg
console.log(type);
