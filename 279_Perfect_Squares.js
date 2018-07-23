const numSquares = n => {
    let leastNum = -1;
    const numberSet = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        numberSet.push(Math.pow(i, 2));
    }
    console.log(numberSet);
    for (let i = numberSet.length - 1; i >= 0; i--) {
        console.log('i: ', i);
        let k = i;
        let num = 0;
        let sum = numberSet[k]; // sum = maxSquare
        num += 1;
        // for
        while (sum !== n) {
            sum += numberSet[k];
            num += 1;
            console.log(sum);
            if (sum > n) {
                sum -= numberSet[k];
                num -= 1;
                k--;
            }
        }
        if (num < leastNum || leastNum < 0) {
            leastNum = num;
        }
    }
    return leastNum;
};

console.log(`Least number is ${numSquares(43)}`);
