var missingNumber = function(nums) {
    let T = (nums.length*(nums.length + 1))/2;
    for(i = 0; i < nums.length ; i++)
    {
        T = T - nums[i];
    }
    return T
};