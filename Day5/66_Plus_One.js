/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
    const incDigit = index => {
        if (digits[index] === 9) {
            digits[index] = 0;
            index > 0 ? incDigit(index - 1) : digits.unshift(1);
        } else digits[index] += 1;
    }
    incDigit(digits.length - 1);
    return digits;
};