//object an object is a non-premitive data type that can help us to store multiple properties in the form of key-value pairs

//1. storing the data inside the object

interface personInfo{
    name:string,
    age:number,
    empId:number,
    visa?:boolean,
    salary?:number,
    address:{
        city:string,
        state:string,
        zip:number,
        country?: string
    }
}

let person:personInfo={
    "name":"komal",
    "age":31,
    "empId": 123,
    "visa":true,
    "address":
    {
        "city":"pune",
        "state":"mh",
        "zip":511111,
        "country":"india"


    }

}
//2. Accessing the data from the object
console.log(person.name);
console.log(person.age);
console.log(person.address.zip); //stitic key
console.log(person["address"]["zip"]) //for dynamically accessing

// 3. Adding new properties to the existing object
//Add salary as 2 lakhs in the main object and country as India in the address object. 
person.salary=200000;
person.address.country="Indiaaa";
console.log(person)

////4. Update an existing property in the existing object. 
person.age=34,
person.address.country="India";
console.log(person)

//5. Deleting a property from the existing object.
console.log("******Deleting a property from the existing Object*****");
delete person.salary;
console.log(person);

//6. Checking if a property exists in the object
console.log("******Checking if a property exists in the Object*****");
console.log("visa" in person)
console.log("salary" in person)

// 7. Get all the keys from the object. 
console.log("******Getting all the keys from the Object*****");
console.log(Object.keys(person));

// 8. Get all the values from the object.
console.log("******Getting all the values from the Object*****");
console.log(Object.values(person));


// 9. Get all the entries from the object.
console.log("******Getting all the entries from the Object*****");
console.log(Object.entries(person));

// 10. Iterate all the keys from the object and get the value out of it. 
console.log("******Iterating all the keys from the Object*****");
for(let key in person){
    console.log(`${key}: ${person [key as keyof personInfo]}`)
}

// 11. Verify the data type of the property within the object. 
console.log("******Verifying the data type of the property within the Object*****");
console.log(typeof person.name);
console.log(typeof person.salary);

// 12. Merging two different objects together and making it as a single object. 
console.log("******Merging two different objects together*****");

interface student{
    stdname:string,
    studentAge:number
}

let studentInfo: student={
    "stdname":"abc",
    "studentAge":22
}
let forMerging={...person,...studentInfo}
console.log(forMerging)