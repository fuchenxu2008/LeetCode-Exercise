/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
    let results = [];
    const aggregate = (str = '', diff = 0) => {
        if (str.length === 2 * n) {
            if (diff === 0) results.push(str);
        } else {
            aggregate(str + '(', diff + 1)
            if (diff - 1 >= 0) aggregate(str + ')', diff - 1);
        }
    }
    aggregate();
    return results;
};

console.log(generateParenthesis(3));