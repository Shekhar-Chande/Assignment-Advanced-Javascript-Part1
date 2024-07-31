// Create a Map to store contact information (name, age, email, location) and implement a function to retrieve
// contact details by name.


const contact = new Map([
    ["Name", "Chander Shekhar"],
    ["Age", "33"],
    ["Email", "Inspiring.fsd@gmail.com"],
    ["Location", "Delhi"]
]);


function Contact_Information(name){
    if(contact.get("Name")== name)
    {
        for(let[key, value] of contact)
        {
            console.log(key + " is " + value);
        }
    }

    else{
        console.log("Name does not exist");
    }

}

Contact_Information("Chander Shekhar")