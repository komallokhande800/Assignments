function largestWordInSentece(str:string):string{
    const word=str.split(/\s+/);
    let largest="";
    for(const words of word)
    {
        if(words.length>largest.length)
        {
            largest=words;
        }
    }
    return largest;
}
console.log(largestWordInSentece("this is the world"));