/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    let sub = [];
    let maxLen = 0;
    s.split('').forEach(char => {
        if (sub.includes(char)) sub = sub.slice(sub.indexOf(char) + 1);
        sub.push(char)
        if (sub.length > maxLen) maxLen = sub.length;
    });
    return maxLen;
};

console.log(lengthOfLongestSubstring('dvdf'));