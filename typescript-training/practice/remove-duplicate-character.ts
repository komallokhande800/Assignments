// function removeDuplicate(str: string): string {
//     const seen = new Set<string>();
//     let result = "";
//     for (const ch of str) {
//         if (!seen.has(ch)) {
//             seen.add(ch);
//             result += ch;
//         }
//     }
//     return result;
// }
// console.log(removeDuplicate("programming"))

function removeDuplicate(str:string):string{

const duplicate=new Set<string>();
let result="";
for (const ch of str)
{
    if (!duplicate.has(ch))
    {
        duplicate.add(ch);
        result+=ch;
    }
}
return result;

}
console.log(removeDuplicate("autommation"));