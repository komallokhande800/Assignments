let sentence:string="Java programming is fun and challenging";

console.log(sentence.length) //39

//1. Count the total number of words in the sentence.
const words: string[] = sentence.split(" ");
console.log(words.length) //6

//2. Print the sentence words in reverse order.
let reverseWord:string="";
for(let i:number=words.length-1; i>=0; i--)
{
reverseWord+=words[i]+ " ";
}
console.log("Reverse Sentence is: " + reverseWord.trim()); //

//3. Convert the first character of each word to uppercase and print original sentence

let uppercaseSentence: string ="";
for (const word of words)
{
    uppercaseSentence = uppercaseSentence + word.substring(0,1).toUpperCase()+ word.substring(1)+" ";
}
console.log("Uppercase sentence is : " +uppercaseSentence.trim());