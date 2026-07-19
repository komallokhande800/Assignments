

// function countCharacters(str: string): void {

//     const count: Record<string, number> = {};

//     for (const ch of str) {
//         count[ch] = (count[ch] || 0) + 1;
//     }

//     console.log(count);
// }

// countCharacters("programming");
// ==


function occuranceOfEachChar(str:string):void{
const count: Record<string, number>={};
for (const ch of str)
{
    count[ch]=(count[ch]||0)+1;
}
console.log(count)


}

console.log(occuranceOfEachChar("Automation"));