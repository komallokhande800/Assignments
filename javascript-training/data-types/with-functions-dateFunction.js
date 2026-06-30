
//function without parameter
//function with paramter
//function with return type


//function without parameter
function LaunchBrowserAndLogin(browser, url){
console.log(`launch the ${browser} browser`);
console.log(`Enter the URL ${url}`);
console.log("Enter the username as 'BHarath' and password as 'bharath");
console.log("click on login button")
}

//function with paramter
function logout(){
console.log("Logout from the application")
console.log("Close the browser");
}

//function with return type
function getAccountBalance()
{   
    console.log("navigate to the account balance page");
    let accountBal=10000;
    return accountBal;
}
console.log("*******************************");
console.log("Test case 1");
console.log("*******************************");

LaunchBrowserAndLogin("Chrome","https://www.google.com/");
console.log("Verify home page is displayed");
logout();

console.log("*******************************");
console.log("Test case 2");
console.log("*******************************");

LaunchBrowserAndLogin("Edge", "https://www.abc.com");
console.log("Verify home page is displayed");
getAccountBalance()
console.log("Verify home page is displayed");
logout();

console.log("****************SET***************");
//set data types represents a collection of unique values of any data type {}

let empIds=new Set();
empIds.add(123)
empIds.add(234)
empIds.add(456)
empIds.add("123")
console.log(empIds)
console.log(empIds.size)

console.log("****************MAP***************");
//Map Datatypes represents a collection of key-value pairs, where keys can be of any data types
//duplicate key not allowed, value can be duplicated

let empDetails=new Map();
empDetails.set(1234,"bharath")
empDetails.set(1,"komal")
empDetails.set(1, "suresh");
empDetails.set(2, "suresh");

empDetails.set(3,"suresh");
console.log(empDetails)

console.log("****************Date***************");
//Date datatypes represents the date and tine together at one place

let currentDate=new Date();
console.log(currentDate);

let currentYear= currentDate.getFullYear();
console.log(`year ${currentYear}`);

let currentMonth=currentDate.getMonth();
console.log(`Month ${currentMonth+1}`);

let currentDay=currentDate.getDay();
console.log(currentDay);

let currentHours=currentDate.getHours();
console.log(currentHours);

let currentMinutes=currentDate.getMinutes();
console.log(currentMinutes);

let currentSeconds= currentDate.getSeconds();
console.log(currentSeconds);