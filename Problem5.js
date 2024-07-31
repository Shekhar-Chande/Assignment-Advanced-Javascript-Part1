// Create two objects person1 and person2 with properties name and age. Create a function “introduce” that
// prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
// using the introduce function.

const introduce={
    fullName : function(){
        console.log(`Hello I'am ${this.name} and I'm ${this.age} years old `);
    }
}

let person1={
    name:"Tarun",
    age:30
}

let person2={
    name: "Chander Shekhar",
    age: 33
}


introduce.fullName.call(person2)