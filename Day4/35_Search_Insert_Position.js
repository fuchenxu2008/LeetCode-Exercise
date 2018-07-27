// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = (nums, target) => nums.concat(target).sort((a, b) => a - b).indexOf(target);

// WRONG
// const searchInsert = (nums, target) => {
//     let found = false;
//     let gap = Math.floor(nums.length / 2);
//     let i = gap;
//     while (!found) {
//         if (nums[i] === target) found = true;
//         else {
//             gap === 1 ? found = true : gap = Math.floor(gap / 2);
//             if (nums[i] < target) i += gap;
//             else if (!found) i -= gap;
//         }
//     }
//     return i;
// }

console.log(searchInsert([1, 3, 5, 6], 2)); // 1