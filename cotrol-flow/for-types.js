const map = new Map()
map.set('India',"INR")
map.set('USA',"Dollar")
map.set('Malaysia',"Ringet")

for (const [key,value] of map) {
    console.log(key,":-",value);
}