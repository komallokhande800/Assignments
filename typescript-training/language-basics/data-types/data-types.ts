let empNumber : number = 1234;
let empName : string ="komal";
console.log (empNumber)
console.log(empName)

let firstName: string ="Komall";
let lastName: string="pawar";
console.log(`first name is ${firstName} and last name is ${lastName}`);
console.log(`employee is is equal to ${empNumber} and emp name is equal to ${empName}`);
let isMarried : boolean=true;
console.log(`what is marriage status ? ${isMarried}`);
let age:undefined;
console.log(age)
let agenull: null= null;
console.log(agenull)
 
//union-allows multiple data types for single varibale
let empAddress : string | number;
empAddress="pune"
console.log(empAddress);
empAddress=123;
console.log(empAddress);

//any- any data types

let data: any;
data="komal";
data=123;
data=true;
console.log(data)

/***************************************************** */
/************Non-Premitive Data Types *****************/
/*************************************************** */

//1.object
interface personInfo{
    name:string,
    age:number,
    empId:number,
    visa:boolean,
    address:{
        city:string,
        state:string
    }
}

let person:personInfo={
    "name": "abc",
    "age": 12,
    "empId":123,
    "visa": true,
    "address":{
        "city":"hydrabad",
        "state":"telenga"
    }
}
console.log(person.address.city);

//Array

let fruits : string[]=["orange", "mango","kiwi"];
let prices :number[]=[100,200,300];
let fruitsAndPrices : (string|number)[]=["apple",100,"kiwi",200,"orange",300];
console.log(fruits[1]);  //mango
console.log(prices[1]); //200
console.log(fruitsAndPrices[0]);

//Tuple- ordered array that represent a list of values in a specific order

//problem statement: store employee name. emp phone number, emp visa status together

let empDetails2 :(string|number|boolean)[]=[12,"hbhb",true]; //order can be anything

//Tuple
let empDetailsInTuple:[string,number,boolean]=["kmkmh", 31,true]; //order should be same with resprect to specified datatypes

//function

function loginToApplication(browser:string, url:string): void{
    console.log(`launch the browser ${browser}`);
    console.log(`Enter the url as ${url}`);
    console.log("Enter username and password");
    console.log("click on login button");

}

function getAccountBalance(accountType:string):number{
    console.log(`navigate to the ${accountType} account balance page`);
    let accountBalance:number=10000;
    return accountBalance;
}

loginToApplication("chrome","njnjnjn");
getAccountBalance("saving")

//set
let empid: Set<string|number>=new Set();
empid.add(1234);
empid.add("jnjd");


//map

let empDetailss: Map <number,string>=new Map();
empDetailss.set(1234, "kkomal");
empDetailss.set(1222,"njnjd");
//Date


let currentDate : Date= new Date();
console.log(currentDate);

let currentYear:number= currentDate.getFullYear();
console.log(currentYear);

let currentMonth:number = currentDate.getMonth();
console.log(currentMonth+1);

let currentDay:number=currentDate.getDate();
console.log(currentDay);

let currentHours:number=currentDate.getHours();
console.log(currentHours);

let currentMin:number=currentDate.getMinutes();
console.log(currentMin);

let currentSec:number=currentDate.getSeconds();
console.log(currentSec);

//symbol=symbol represnts a unique hidden identifier inside an object.

let countryOfOrigin= Symbol();
interface productDetails{
    productName:string,
    price:number,
    [countryOfOrigin]:string
}
let productInfo: productDetails={
    productName:"iPhone 14 pro",
    price: 1200000,
    [countryOfOrigin]:"china"
}

console.log(productInfo.price);