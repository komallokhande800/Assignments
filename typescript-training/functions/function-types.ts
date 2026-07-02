//1.Named function
//function functionName(parameter):returnType{
//function body}
function add(a:number, b:number):number{
    return a+b;
}
add(1,2)
//2. Anonymous function
//the function declared without a name and function that we are going to use as a paramter for another function
//syntax: 
// function functionName(function-as-paramter): return-type
//{
//code to execute
//}
//ex1
function calculator(square : (x:number)=>number):void{
    console.log(square(5));
}
calculator(
    function (a:number):number{
        return a*a
    }
)
//ex 2
function newCalculator(greeting: (x:string)=>string):void{
    console.log(greeting(" bharath"))
}

newCalculator(
    function(x:string):string{
        return "good morning " +x;
    }
)
//********************************************** */
//3. Arrow function
let sum=(c:number, d:number)=>(c+d)
console.log(sum)

