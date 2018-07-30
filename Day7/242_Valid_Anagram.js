/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('') === t.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');

console.log(isAnagram("anagram", "nagaram"));