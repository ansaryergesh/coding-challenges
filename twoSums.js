var twoSum = function(nums, target) {
    if (nums.length === 0) return [];
    
    const remainders = {};
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num in remainders)  {
            return [remainders[num], i];
        }
        remainders[target-num] = i;
    }
    return [];
};