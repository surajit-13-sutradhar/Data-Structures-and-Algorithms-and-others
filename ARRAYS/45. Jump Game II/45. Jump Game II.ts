function jump(nums: number[]): number {
    // it is guaranteed that we'll reach the end
    let minJumps = 0;
    let maxJump = 0;
    let last = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        maxJump = Math.max(maxJump, i + nums[i]);

        if (last === i) { // if current index is the maximum position achievable YET
            // increment minJumps
            minJumps++;
            // move the last index to the maximum position possible from here
            last = maxJump;
        }
    }
    // we don't need to count the last jump, as we are already at the end
    // so we return minJumps as is
    return minJumps;
};