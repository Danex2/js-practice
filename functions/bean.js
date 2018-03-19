const countBs = (b) => {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if ("B" === b[i]) {
            count = count + 1
            }
    }
    console.log(count);
}

countBs("BBC");

const countChar = (b,k) => {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (k === b[i]) {
            count = count + 1
            }
    }
    console.log(count);
}

countChar("google", "g");