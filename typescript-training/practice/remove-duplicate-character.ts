function removeDuplicate(str: string): string {
    const seen = new Set<string>();
    let result = "";
    for (const ch of str) {
        if (!seen.has(ch)) {
            seen.add(ch);
            result += ch;
        }
    }
    return result;
}
console.log(removeDuplicate("programming"))