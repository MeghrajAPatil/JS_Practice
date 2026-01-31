const user = {
    username : "Mac",
    price : 999,
    website : function(){
        console.log(`${this.username}, welcome to JS playground`);
    }
}
user.website()
user.username = "Mini"
user.website()
//explicit return coz we use return keyword
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
//implicit return
const addTwo = (num1,num2)=> (num1+num2)
console.log(addTwo(4,3));

