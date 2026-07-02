const paragraph:String = 
"Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let splittedString:string[]=paragraph. split(" ");

let javaCount: number=0;

for(let i:number=0; i< splittedString.length; i++)
{
    if(splittedString[i].toLowerCase()=="java")
    {
console.log("Java word is at index " +i)

javaCount++;
    }
}
console.log(`Total number of "java" occurances in given paragraph ${javaCount}`);

