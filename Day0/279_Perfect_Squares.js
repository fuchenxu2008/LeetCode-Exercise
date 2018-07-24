const numSquares = n => {
    let leastNum = -1;
    const numberSet = Array(Math.floor(Math.sqrt(n))).fill().map((_, i) => Math.pow(i + 1, 2));
    for (let i = numberSet.length - 1; i >= 0; i--) {   // i -> index of largest element
        for (let k = i; k >= 0; k--) {  // k -> index of second largest element
            let num = 1;    // num -> number of element of current iteration, initialized with the largest element
            let sum = numberSet[i];
            let m = k;  // copy of k index, keep searching for better match
            while (sum !== n) {      
                if (sum + numberSet[m] > n) m--;
                else {
                    sum += numberSet[m];
                    num += 1;
                }
            }
            if (num < leastNum || leastNum < 0) leastNum = num;
        }
    }
    return leastNum;
};

console.log(`Least number is ${numSquares(43)}`);