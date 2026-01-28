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
let ar = [1,2,3,4,5]
function rev (arr){
    let left = 0, right = arr.length-1
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++;
        right--;
    }
    return arr;
}
console.log(rev(ar));


