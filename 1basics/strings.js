const str = new String('Alpha-Romeo');
console.log(str);
console.log(str.toUpperCase());
console.log(str.charAt(3));
console.log(str.indexOf('h'));
const newString = str.substring(0,4);
console.log(newString);
let spaces = "   Mac   ";
console.log(spaces);
console.log(spaces.trim());
console.log(str.replace('Alpha','Bravo'));
let check = '00&10*01-11';
let merge = check.split(/[&*-]/);
console.log(merge); 
console.log(merge.join(''));

let arr = [1,2,3,[4,5,[6,7,8]]];
console.log(arr.flat(2));
console.log(str.fromCharCode);




