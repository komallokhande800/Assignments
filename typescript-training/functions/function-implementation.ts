//1. function without parameters abd return type
console.log("******function 1 implemetation****")

function greet():void{
    console.log("hello");
}
greet();

//2. function with parameters but without return type
console.log("******function 2 implemetation****")

function greetPerson(name:string):void{
    console.log(`hello ${name}`)
}
greetPerson("komal")

//3. function with parameters and some return type 
console.log("******function 3 implemetation****")

function add(a:number, b:number):number{
    return a+b;
}
console.log(add(10,10))

//4.function without parameter and with return type
console.log("******function 4 implemetation****")

function getCurrentDate():Date{
    return new Date()
}
console.log(getCurrentDate());

//5. function with optional parameters
//creating a function which is going to take some input paramters, and some of the parameters are optional to enter
console.log("******function 5 implemetation****")

function personDetails(name:string, age?:number):void{
    console.log(name)
    if(age){
    console.log(age)

    }
}
console.log(personDetails("komal"));
console.log(personDetails("komal2", 31));

//6. function with default paramters
//creating a function which is going to take input parameters, and some of the parameters have default values
console.log("******function 6 implemetation****")
function personInfo(name:string, age:number, visaStatus:boolean = false):void{
    console.log(name)
    console.log(age);
    console.log(visaStatus);
}
console.log(personInfo('komal',32, true));

console.log("******function 7 implemetation****")
//function with REST parameters.
//crwating a function that will take undefined paramters and produce the output

function sumOfNumbers(...numbers : number[]):number{
    let sum : number=0;
    for (let num of numbers)
    {
        sum+=num;
    }
    return sum;
}
console.log(sumOfNumbers(1,2,3,4));