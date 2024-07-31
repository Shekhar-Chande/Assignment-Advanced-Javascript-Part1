// Create an object car with properties brand, model, and a method displayDetails that prints "Brand: [brand],
// Model: [model]". Test the method using this keyword.

let car={
    Brand: "Hyundai",
    Model: "2024",
    displayDetails: function(){
        console.log(`Car brand is ${this.Brand} and Model of a car is ${this.Model}`);
    }
}

car.displayDetails()