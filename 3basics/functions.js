// function add(a,b){
//     const sum = a+b;
//     console.log(`the sum is ${sum}`);
// }
// add(2,3)

// function addToCart(...num1){
//     return num1
// }
// console.log(addToCart(100,400,500));
const user = {
    name : "Mac",
    price : 69000
}
function handleObject(anyobject){
    console.log(`User name is ${anyobject.name} and the price is ${anyobject.price}`);
}
handleObject(user)