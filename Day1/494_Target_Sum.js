const findTargetSumWays = (nums, S) => {
    let ways = 0;
    const aggregate = (sum, i) => {
        if (i === nums.length) {
            if (sum === S) ways += 1;
        } else {
            aggregate(sum + (-1) * nums[i], i + 1);
            aggregate(sum + nums[i], i + 1);
        }  
    }
    aggregate(0, 0);
    return ways;
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))