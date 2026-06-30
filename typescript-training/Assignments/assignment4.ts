const transactionAmt:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000]

let creditedTans:number=0
let debitedTran:number=0
let TotalCreditedAmt:number=0
let TotalDebitedAmt:number=0
let suspiciousTrans:number=0
for(let amount of transactionAmt)
{
    if (amount>0)
    {
     creditedTans++;
     TotalCreditedAmt+=amount
     if(amount>10000)
     {
        console.log(`Suspicious credit Transaction : ${amount}`)
        suspiciousTrans++;
     }
  
    }
    else
        {
    debitedTran++;
     TotalDebitedAmt-=amount
     if(amount<-10000)
     {
        console.log(`Suspicious debited Transaction : ${amount}`)
        suspiciousTrans++;
     }
    }
}
console.log(`Total created transactions are ${creditedTans} and total debited transactions are ${debitedTran}`)
console.log(`Total Credited amount is as ${TotalCreditedAmt} and total debited amount is equal to ${TotalDebitedAmt}`)  
let remianingBalance:number= TotalCreditedAmt-TotalDebitedAmt;
console.log(`Total Remaining amount is equal to ${remianingBalance}`)
console.log(`Number of Suspicious transactions ${suspiciousTrans}`)