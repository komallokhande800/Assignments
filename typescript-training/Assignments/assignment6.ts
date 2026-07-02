const num:number =13;
let prime:boolean=true;

if(num<=1){
    console.log("Number less than 1, not a prime number");
    prime=false;
}
for(let i:number=2;i<num;i++)
{
if (num%i==0)
{  //found a divisor other than 1 and itself
    prime=false;
    console.log("Not a prime number")
    break;
}
}
if(prime)
{
    console.log(num + "is a prime number");
}
else{
    console.log(num + "is not a prime number")
}

export{};