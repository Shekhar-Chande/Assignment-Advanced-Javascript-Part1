// Create a Map in JavaScript and perform the following operations
//  Add key-value pairs to the Map
//  Check if a specific key exists
//  Retrieve the value associated with a given key
//  Iterate through all key-value pairs



// Point 1:- Add key-value pairs to the Map

const map1 = new Map([
    ["key1", "Value1"],
    ["key2", "Value2"],
    ["key3", "Value3"],
    ["key4", "Value4"]
])
console.log(map1);



// insert values in map using set method
const map2  = new Map();
map2.set("Fname", "Chander");
map2.set("Lname",  "Shekhar");
map2.set("Website", "PWSkills");

console.log(map2);
console.log(typeof map2);




//Point2:- Check if a specific key exists

function isKeyExist(key)
{
    return map2.has(key)
}

console.log(isKeyExist("Website"));





// Point3:-  Retrieve the value associated with a given key

function isValueExist(value)
{
    return map2.get(value)
}

console.log(isValueExist("Fname"));




// Point 4:- Iterate through all key-value pairs

//Ans:- There are N number of ways to iterate through all key value pairs. 

// Using For of loop

for(let [key, value] of map2)
{
    console.log(key +" is "+ value);
}


//Using For each loop

map1.forEach((key, value)=>{
    console.log(key, value);
})  