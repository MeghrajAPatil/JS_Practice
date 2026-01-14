//Stack(Primitive) and Heap(Non Primitive)
//Stack gives copy of the variable declared
//Heap gives refrence of the original value
let myName = "Mac";
let myNewname = myName;
myNewname = "chiku"
console.log(myName);
console.log(myNewname);
//Primitive datatypes are given copies 

let userOne = {
    ID: 123,
    UID : "Bravo"
}
let userTwo = userOne;
userTwo.UID = "Alpha"
console.log(userOne);
console.log(userTwo);
//Heap assigns refrence to the main value so 
//whe we change the value in one non primitive
//datatype it changes in main too as it is refrence 
//{ ID: 123, UID: 'Alpha' }
//{ ID: 123, UID: 'Alpha' }