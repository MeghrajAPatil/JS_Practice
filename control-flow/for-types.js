const map = new Map()
map.set('India',"INR")
map.set('USA',"Dollar")
map.set('Malaysia',"Ringget")

for (const [key,value] of map) {
    console.log(key,":-",value);
}
//we can't use for in loop in case of map as it is not iterable
const arr = ["Mac","windows","Linux"]
for (const key in arr) {
    console.log(arr[key]);
}
