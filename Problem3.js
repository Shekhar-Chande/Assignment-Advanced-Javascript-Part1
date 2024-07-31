// You are given an array of numbers named myArray. Create a function that takes any number of arguments
// and adds them to the existing array. Use the spread and rest operator.

const myArray = [];

function insert(...args) //Rest Operator
{
    myArray.push(...args) // Spread operator
    console.log(myArray);
}

insert(2,5,6,7,8,9,21)
