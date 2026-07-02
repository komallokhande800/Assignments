//If I will pass int rows = 5 then it should print triangle with 5 Rows
let num:number=5;
for(let i:number=1; i<=num; i++) 
{   
    let line: string="";
    for (let j:number=i; j<num; j++) 
    {
        line +=" ";
    }
    for(let j:number=1; j<=i; j++)
    {
        line+= "*";
    }
    console.log(line);
}
