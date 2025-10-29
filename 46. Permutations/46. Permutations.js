/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let n = nums.length;
    let result = [];

    var backtrack = function(temp, used) {
        // if the length of temp reaches nums length we push the temp array into the result array
        if (temp.length === n) {
            result.push([...temp]);
            return; // this terminates the current recursive call
        }
        for (let i = 0; i < n; i++) {
            // if the number is already used in the current iteration
            // skip it
            if (used[i]) continue;
            // else push it in the temp array
            temp.push(nums[i]);
            // set the corresponding index in used to be true
            used[i] = true;
            // again call the backtrack function for recursive fill
            backtrack(temp, used);
            // remove the currently processed element to go back one stage
            temp.pop();
            used[i] = false;
        }
    }
    
    backtrack([], new Array(n).fill(false));
    return result;
};