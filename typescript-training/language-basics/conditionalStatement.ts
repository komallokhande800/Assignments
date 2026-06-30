let percentage:number=35;
if(percentage>=90)
{
    console.log("grade A")
}
else if(percentage>=70)
{
    console.log("grade B")
}
else 
{
    console.log("grade D")
}

let percentage2:number=35;
if(percentage>=90)
{
    console.log("grade A")
    if(percentage2>=95)
    {
        console.log("receive gold medal")
    }
    else{
        console.log("recieved silver medal")
    }
}
else if(percentage>=70)
{
    console.log("grade B")
}
else 
{
    console.log("grade D")
}

let env:string="default"
switch(env){
    case "dev":
        console.log("launch dev url")
        break;
    case "Qa":
        console.log("launch Qa url")
        break;
    case "Stage":
        console.log("launch Stage url")
        break;
    case "default":
        console.log("default case");

}