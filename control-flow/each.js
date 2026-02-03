// let arr = [1,2,3,4]
// arr.forEach(function(item){
//     item = item*item;
//     console.log(item);
// })
const lang = [
    {
        name : "javascript",
        shortcut : "js"
    },
    {
        name : "java",
        shortcut : "java"
    },
    {
        name : "python",
        shortcut : "py"
    }
]
lang.forEach( (item) =>{
    console.log(item.shortcut);
})