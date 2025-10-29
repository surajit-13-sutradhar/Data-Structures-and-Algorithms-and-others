/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let n = matrix.length; // no of rows
    let m = matrix[0].length; // no of columns
    let prefixSum = Array.from({ length: n }, () => new Array(m).fill(0));
    let maxArea = 0;

    for (let j = 0; j < m; j++) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += Number(matrix[i][j]);
            if (matrix[i][j] === "0") sum = 0;    // if encountered a 0 in this iteration, 
            prefixSum[i][j] = sum;              // set sum to zero to start anew with the new element
        }
    }

    for (let i = 0; i < n; i++) {
        maxArea = Math.max(maxArea, largestRectangleHistogram(prefixSum[i]));
    }

    return maxArea;
};

function largestRectangleHistogram(heights) {
    let stack = [];
    let maxArea = 0;
    heights = [...heights, 0]; 

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}