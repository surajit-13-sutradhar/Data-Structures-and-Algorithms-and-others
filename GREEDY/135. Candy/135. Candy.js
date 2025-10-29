// NAIVE APPROACH O(3*n), O(2*n) SC
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let n = ratings.length;

    let left = new Array(n).fill(1);
    let right = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
    }

    for (let j = n - 2; j >= 0; j--) {
        if (ratings[j] > ratings[j + 1]) {
            right[j] = right[j + 1] + 1;
        }
    }

    let ans = 0;
    for (let k = 0; k < n; k++) {
        ans += Math.max(left[k], right[k]);
    }

    return ans;
};