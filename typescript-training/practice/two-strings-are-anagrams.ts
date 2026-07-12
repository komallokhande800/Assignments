function isAnagram(str1:string, str2:string):boolean{
    const first=str1.toLowerCase().split("").sort().join("");
    const second=str2.toLowerCase().split("").sort().join("");
    return first===second
}
console.log(isAnagram("listen","silent"))
