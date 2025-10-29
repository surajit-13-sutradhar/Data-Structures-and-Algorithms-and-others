/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let temp = [];
    let result = [];

    var solve = function(start, k, temp) {
        if (k === 0) {
            result.push([...temp]);
            return;
        }

        if (start > n) return;

        temp.push(start); // choose current number
        solve(start + 1, k - 1, temp); // use backtracking function on the next number
        temp.pop(); // remove the last entered number(backtracking step)

        solve(start + 1, k, temp); // move to next number (i.e. skipping the current number, but keeping k the same)
    }

    // call the solve function staring from the first index
    solve(1, k, temp);
    return result;
};