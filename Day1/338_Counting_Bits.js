const countBits = num => {
    return [...Array(num + 1).keys()].map(n => ((n.toString(2).match(/1/g) || [])).length);
};

console.log('countBits: ', countBits(5));