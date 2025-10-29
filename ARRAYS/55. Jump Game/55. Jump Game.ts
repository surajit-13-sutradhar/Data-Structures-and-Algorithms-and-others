function canJump(nums: number[]): boolean {
    let n = nums.length;
    let maxJump = 0; // initially set maxJump to 0

    for (let i = 0; i < n; i++) { // second to last index
        if (maxJump < i) return false; // if maxJump is less than the current index, return false
        else {
            // else set maxJump to the max of maxJump & i + nums[i]
            maxJump = Math.max(maxJump, i + nums[i]);
        }
    }
    // if we can safely traverse this for loop, it means that
    // for every index i we have a possible way reaching the end
    return true;
};