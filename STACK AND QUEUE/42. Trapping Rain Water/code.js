/**
 * @param {number[]} height
 * @return {number}
 * Implementation of Monotonic Stack
 */

var getLeftMax = function (height) {
    let leftMax = [];
    leftMax[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    return leftMax;
}

var getRightMax = function (height) {
    let rightMax = [];
    rightMax[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    return rightMax;
}

var trap = function(height) {
    // Create two arrays, one stores the maximum element to the left (inclusive that ele.)
    // another for the maximum element to the right (inclusive that ele.)
    // water help by the ith building = (leftMax[i], rightMax[i]) - h[i];
    if (height.length === 1 || height.length === 0) return 0;

    let leftMax = getLeftMax(height);
    let rightMax = getRightMax(height);

    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        sum += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return sum;
};