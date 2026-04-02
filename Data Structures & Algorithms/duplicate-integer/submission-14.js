let nums = [1, 2, 3, 3];

class Solution {
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            if (nums.indexOf(nums[i]) !== i) {
                return true;
            }
        }
        return false;
    }
}

const obj = new Solution();
console.log(obj.hasDuplicate(nums));