/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */


var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let back = 0;
    let length = nums.length;
    let minLength = Infinity;

    // iterate through the array
    for (let front = 0; front < length; front++) {
        sum += nums[front];

        while (sum >= target) {
            minLength = Math.min(minLength, front - back + 1); // set minlength to the minimum of current minLength 
            // or the current front - back + 1
            sum -= nums[back];
            back++;
        }   
    }

    return minLength === Infinity ? 0 : minLength;
};

