/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
    const result = parseInt(str, 10) || 0;
    return Math.max(Math.pow(-2, 31), Math.min(Math.pow(2, 31) - 1, result));
};

console.log(myAtoi('words and 987'))