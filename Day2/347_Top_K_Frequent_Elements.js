/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const dic = {};
    nums.forEach(num => {
        if (dic[num] !== undefined) dic[num] = dic[num] + 1;
        else dic[num] = 1;
    })
    return Object.keys(dic).sort((a, b) => dic[b] - dic[a]).slice(0, k).map(_ => parseInt(_, 10));
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));