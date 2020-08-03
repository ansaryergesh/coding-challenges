var containsDuplicate = function(nums) {
    let numsStore = {};
    for(let i=0; i<nums.length; i++){
        if(numsStore[nums[i]]){
            return true;
        }
        else{
            numsStore[nums[i]] = 1;
        }
    }
    return false;
    
};