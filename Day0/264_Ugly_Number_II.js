const nthUglyNumber = n => {
    const uglyNumSet = [];
    let k = 1;
    while (uglyNumSet.length !== n) {
        if (isUgly(k)) {
            uglyNumSet.push(k);
        }
        k++;
    }
    return uglyNumSet[uglyNumSet.length - 1];
};

const isUgly = n => {
    let temp = n;
    [2, 3, 5].forEach(div => {
        while (temp % div === 0) {
            temp = temp / div;
        }
    });
    return temp === 1;
}

console.log('nthUglyNumber: ', nthUglyNumber(9));