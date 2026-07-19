function myPow(x: number, n: number): number {

    let exponent: bigint = BigInt(n);
    let base: number = x;
    let result: number = 1;

    if (exponent < 0n) {
        base = 1 / base;
        exponent = -exponent;
    }

    while (exponent > 0n) {

        if (exponent % 2n === 1n) {
            result = result * base;
        }

        base = base * base;
        exponent = exponent / 2n;
    }

    return result;
}

console.log(myPow(2.00000, 10)); // 1024
console.log(myPow(2.10000, 3));  // 9.261
console.log(myPow(2.00000, -2)); // 0.25