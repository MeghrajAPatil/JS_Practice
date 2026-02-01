(function mac(){
    console.log("This is immediately invoked function expression");
})();
((name) => {
    console.log(`this is IIFE in ${name}`);
})('JS')