//Primitive data types (immutable)- original value won't change
//Non-Primitive data types (mutable)
//immutable

let a=10;
a+10;
console.log(a) // op will be 10 only as we not store the value in another variable ,so a is immutable here

//mutable:
let obj={
    "name":"bharath",
    "id":1234
}
obj.age=35;
console.log(obj)

/***********************************/
/*Premitive Data Types*/
/***********************************/

/*number
String
Boolean
undefined= it represent variable that has been declared but not assigned any value
null= it represent variable that has been declared but  assigned a null value or empty value
symbol */

let z;
console.log(z)
let xx=null
console.log(xx)

/***********************************/
/* Non-Premitive Data Types*******/
/***********************************/
//example- Object, Arrays, Functions
//object object data types represent a collection of key-value pairs within the curly brackets

let person={
    "name":"komal",
    "age": 31,
    "isMarried": "Yes",
    "address":{
        "city":"hydrabad",
        "state":"telephone"
    }
}
console.log(person.age);
console.log(person.address.city);
console.log(person.address.state)

//Array is a data type, array represent a list of values with any data types.simply need to use []

let fruits=["banan","apple","jackfruite","orange"]
let prices=[100,200,300]
let fruitesAndPrices=["apple", 100,"banana", 200,"orange", 300]

console.log(fruitesAndPrices[0])

//function data type- it represent a block of code or collection of statements written together to complete a specific task
