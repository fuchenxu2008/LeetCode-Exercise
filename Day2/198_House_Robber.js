/**
 * @param {number[]} nums
 * @return {number}
 */

// const rob = nums => {
//     let maxSum = 0;
//     const aggregate = (i, sum) => {
//         if (i + 2 > nums.length - 1) {
//             if (sum > maxSum) maxSum = sum;
//         } else {
//             if (i + 2 <= nums.length - 1) aggregate(i + 2, sum + nums[i + 2])
//             if (i + 3 <= nums.length - 1) aggregate(i + 3, sum + nums[i + 3])
//         }
//     }
//     aggregate(-2, 0);
//     return maxSum;
// };

/**
 * f(0) = nums[0]
 * f(1) = max(nums[0], nums[1])
 * f(n) = max(nums[n] + f(n-2), f(n-1))
 */
// const rob = nums => {
//     const getMax = (n) => {
//         if (n < 0) return 0;
//         else if (n === 0) return nums[n];
//         else if (n === 1) return Math.max(nums[0], nums[1]);
//         else return Math.max(nums[n] + getMax(n - 2), getMax(n - 1));
//     }
//     return getMax(nums.length - 1)
// }

const rob = nums => {
    const n = nums.length - 1;
    const f = Array(n + 1);
    console.log(f);
    if (n < 0) return 0;
    if (n >= 0) f[0] = nums[0];
    if (n >= 1) f[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i <= n; i++) {
        f[i] = Math.max(f[i - 2] + nums[i], f[i - 1]);
    }
    return f[n];
}

console.log(rob([1]))
