// function reverString(str: string):string{
//     return str.split('').reverse().join('')
// }
// console.log(reverString('Hello world!'));
function reveredString(str:string)
{
    let reveredString="";
    for(let i=str.length-1;i>=0;i--)
    {
        reveredString+=str[i]
    }
    return reveredString;
}
console.log(reveredString("hello World"));