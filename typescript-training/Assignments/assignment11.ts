let n: number = 5;

// Upper half
for (let i = 1; i <= n; i++) {

    let spaces: string = '';
    let numbers: string = '';

    // Print spaces
    for (let j = i; j < n; j++) {
        spaces += ' ';
    }

    // Print numbers
    for (let j = 1; j <= i; j++) {
        numbers += j + ' ';
    }

    console.log(spaces + numbers);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {

    let spaces: string = '';
    let numbers: string = '';

    // Print spaces
    for (let j = i; j < n; j++) {
        spaces += ' ';
    }

    // Print numbers
    for (let j = 1; j <= i; j++) {
        numbers += j + ' ';
    }

    console.log(spaces + numbers);
}