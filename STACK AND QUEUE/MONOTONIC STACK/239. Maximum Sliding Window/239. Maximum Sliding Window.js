/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//     let n = nums.length;
//     let result = [];

//     for (let i = 0; i <= n - k; i++) {
//         let max = nums[i]; // set the max to first element of the window
//         for (let j = i; j <= i + k - 1; j++) {
//             max = Math.max(max, nums[j]);
//         }
//         result.push(max);
//     }
//     return result;
// };

// optimised approach
var maxSlidingWindow = function (nums, k) {
    let n = nums.length;
    let result = [];
    let deque = []; // deque to store indices

    for (let i = 0; i < n; i++) {
        // while the deque is not empty && the front index is k 
        // behind the current index (i.e the size of the window is k)
        while (deque.length && deque[0] <= i - k) {
            deque.shift(); // pop element from the front, i.e remove indices that are out of this window
        }

        // monotonic stack
        // while deque is not empty and the incoming number is greater than or equal to the element in the 
        // back of the deque, pop that element
        while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        // after these two steps, push the current index
        deque.push(i);

        // if the current index is atleast more than the size of the window
        if (i >= k - 1) {
            result.push(nums[deque[0]]); // for each window, we are going to keep the 
            //index with the maximum element at the front
        }
    }
    return result;
}