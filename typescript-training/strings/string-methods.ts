//String : string is a collection of characters in TypeScript. We can store string in single quotes, double quotes, or back ticks. 

//Text/String values ==> Sequence of chars ,we have to store inside double quotes or single quotes or back ticks
let firstName: string = "Bharath";
let lastName: string = 'Reddy';
console.log(`Name of the employee is ${firstName} ${lastName}`)

//1. Storing a string in a variable. 
console.log("******Storing a string in a variable*****");
let originalString: string = " Username : Admin | Password : admin123 ";
console.log(originalString);

//2. Method to calculate the total number of characters available in the string. => length()
console.log("******Method to calculate the total number of characters available in the string*****");
console.log(originalString.length); //40

// 3. Method to get a specific character from a string by using an index. => charAt(Index)
console.log("******Method to get a specific character from a string by using an index*****");
console.log(originalString.charAt(1)); //U

//Reverse the string by using the above two methods. 
console.log("******Reverse the string by using the above two methods*****");
let reverString:string="";

for(let i=originalString.length-1;i>=0; i--)
{
    reverString +=originalString.charAt(i);
}
console.log(reverString);


//4. Method to Remove the unwanted spaces from the string. 
console.log("******Method to Remove the unwanted spaces from the string*****");
console.log(originalString.trim());


//5. Method to remove all the spaces from the string. => replace(/old-char/g, "new-char")
console.log("******Method to remove all the spaces from the string*****");
console.log(`original string ${originalString}`);
console.log(originalString.replace(/ /g,""));

//6. Method to remove all the alphabets from the string. => replace(/old-char/g, "new-char")
console.log("******Method to remove all the alphabets from the string*****");
console.log(originalString.replace(/[a-zA-Z]/g, ""));


//7. Method to remove all the numbers from the string. => replace(/old-char/g, "new-char")
console.log("******Method to remove all the numbers from the string*****");
console.log(originalString.replace(/[0-9]/g, ""));

//8. Method to remove all the special characters from the string => replace(/old-char/g, "new-char")
console.log("******Method to remove all the special characters from the string*****");
console.log(originalString.replace(/[^a-zA-z0-9]/g, ""));

//9. Method to convert the string into uppercase. => toUpperCase()
console.log("******Method to convert the string into uppercase*****");
console.log(originalString.toUpperCase());


//10. Method to convert the string into lowercase. => toLowerCase()
console.log("******Method to convert the string into lowercase*****");
console.log(originalString.toLowerCase());

//11. Method 2: Extract Specific Part of the String by Using Index => substring(startIndex, endIndex+1)
console.log("******Method 2: Extract Specific Part of the String by Using Index*****");
console.log(originalString.substring(12,17));
console.log(originalString.substring(31,39));

//12. Method two: split the text into multiple parts and extract a particular part of the text. => split("separator")
console.log("******Method two: split the text into multiple parts and extract a particular part of the text*****");
let stringParts: string[]=originalString.split(" ");
console.log(`Username: " ${stringParts[3]!.trim()}"`);
console.log(`Password: "${stringParts[7]!.trim()}"`);


//13. Methods to Compare two different strings. 
console.log("******Methods to Compare two different strings*****");

let string1: string | number = "100";
let string2: string | number = 100;
console.log(`Using ==operator: ${string1==string2}`); 
console.log(`Using ==operator: ${string1===string2}`); 
console.log(originalString.startsWith("a"));//false
console.log(originalString.startsWith(" Username"));//true

console.log(originalString.endsWith("a")); //false
console.log(originalString.endsWith("admin123 ")); //true

console.log(originalString.includes("admin"))//true