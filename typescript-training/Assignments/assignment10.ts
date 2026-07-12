let priceByDay:number[]=[7,1,5,3,6,4];
let maxprofit:number=0
let buyDay:number =0;
let sellDay:number=0;

//outer loop :pick each day as a potential buying day
for(let i:number=0;i<priceByDay.length-1;i++) 
    {
        //inner loop-selling day
    for(let j:number=i+1; j<priceByDay.length-1;j++)
    {
        const profit: number = priceByDay[j] - priceByDay[i]
        if(profit > maxprofit)
        {
            maxprofit=profit;
            buyDay=i+1;
            sellDay=j+1;
        }
    }
}
if (maxprofit>0)
{
console.log("max profit is "+maxprofit);
console.log("Buy the share on day "+buyDay);
console.log("sell the share on" +sellDay) ;

}