//madam
function isPalindrome(str:string):boolean{
let left=0;
let right=str.length-1; //5
while(left<right)
{
    if(str[left]!=str[right])
    {
        return false;
    }
    left++;//1 2 3 
    right--;//4 3 2 
}
return true;
}

console.log(isPalindrome("madsam"));
