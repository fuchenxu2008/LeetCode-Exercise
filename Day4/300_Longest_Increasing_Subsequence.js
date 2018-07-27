// Given an unsorted array of integers, find the length of longest increasing subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = nums => {
    const numLen = nums.length;
    if (numLen === 0) return 0;
    if (numLen === 1) return 1;
    let maxLen = 1;
    for (let i = 0; i < numLen - 1; i++) {
        let options = [];
        for (let k = i + 1; k < numLen; k++) {
            let longer = false;
            options.forEach(op => {
                let concated = false;
                let endIndex = op.length - 1;
                while (!concated && endIndex >= 0) {
                    if (nums[k] > op[endIndex]) {
                        endIndex === op.length - 1 ? op.push(nums[k]) : options.push(op.slice(0, endIndex + 1).concat(nums[k]))
                        longer = true;
                        concated = true;
                    } else endIndex--;
                }
            });
            if (!longer && nums[k] > nums[i]) options.push([nums[i], nums[k]]);
        }
        options.forEach(op => {
            if (op.length > maxLen) maxLen = op.length;
        });
    }
    return maxLen;
};

console.log(lengthOfLIS([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12]));