// function replaceCharacterFollowedBycount(str:string):string
// {
// if(str.length===0)
// {
//     return "";
// }
// let result="";
// let count=1;
// for(let i=0;i<str.length;i++)
// {
//     if(str[i]===str[i+1])
//     {
//         count++;
//     }
//     else
//     {
//         result+=str[i]+count;
//         count=1;
//     }
// }
// return result;
// }

// console.log(replaceCharacterFollowedBycount("aaabbcccc"))//a3b2c4

function replaceChByCount(str:string):string{
let count:number=1;
let result="";
if(str.length===0)
{
    return " ";
}
for(let i:number=0;i<str.length;i++)
{
    if(str[i]===str[i+1])
    {
        count++;
    }
    else{
        result+=str[i]+count;
        count=1;
    }
}
return result;
}
console.log(replaceChByCount("aaabbcccc"));