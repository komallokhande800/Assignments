function firstNonRepeating(str:string):string |null{
    const map:Record<string,number>={};
    for (const ch of str)
    {
        map[ch]=(map[ch]||0)+1; 
        //in first iteraction s =1, 2nd iteraction w=1,thirst iteraction i=1, 
        //4th iteraction s become 2 and in 5th s become 3
    }

    for (const ch of str) //here we already have a character count 
    {
        if(map[ch]===1)
        {
            return ch;
        }
    }
    return null;
}
console.log(firstNonRepeating("swiss"))

