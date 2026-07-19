// function largestWordInSentece(str:string):string{
//     const word=str.split(/\s+/);
//     let largest="";
//     for(const words of word)
//     {
//         if(words.length>largest.length)
//         {
//             largest=words;
//         }
//     }
//     return largest;
// }
// console.log(largestWordInSentece("this is the world"));

function largetord(str:string):string{
    const word=str.split(" ");
    let largest="";
    for (const words of word)
    {
if (words.length>largest.length)
{
    largest=words;
}
    }
    return largest;
}

console.log(largetord("this is larsssgest word program"))