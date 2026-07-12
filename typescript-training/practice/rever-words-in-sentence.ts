function reverseWordsInSentence(sentence:string):string{
    return sentence.trim().split(/\s+/).reverse().join(" ");
}
console.log(reverseWordsInSentence("playwright is awesome"))