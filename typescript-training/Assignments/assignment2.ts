let customerName = "John Doe";
let creditScore = 720;
let income = 55000.0;
let isEmployed = true;
let debtToIncomeRatio = 35.0;

// function eligibility(
//     customerName:String,
//     creditScore:number,
//     income:number,
//     isEmplyed:boolean,
//     debtToIncomeRatio:number

// )

if(creditScore>750)
    {
    console.log("loan approved");
     }
else if(creditScore>650 && creditScore<750)
    {
    console.log("Additional checks are performed")
    if(income>=5000){
        console.log("loan to be considered")
        if(isEmployed==true)
        {
            console.log("customer credit score is between 650 and 750, also income>5000 and still employeed, can consider for loan")
        if(debtToIncomeRatio<40)
        {
            console.log("All Good, loan approved")
        }
        else{
            console.log("DTI is greater than 40%, loan denied")
        }
        }

        else{
            console.log("customer is unemployeed,hence loan denied")
        }
    }
   }
else{
    console.log("The loan is denied")
}
// eligibility(
//     "John Doe",
//   720,
//  55000.0,
// true,
//   35.0
// )