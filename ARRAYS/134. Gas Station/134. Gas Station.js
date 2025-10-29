/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var sum = function(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
var canCompleteCircuit = function(gas, cost) {
    // gas is added
    // cost is subtracted
    // greedy
    let n = gas.length;
    if (sum(gas) < sum(cost)) return -1; // ensuring a solution exists

    let total = 0;
    let result = 0;
    for (let i = 0; i < n; i++) {
        total += (gas[i] - cost[i]);
        if (total < 0) {
            total = 0;
            result = i + 1;
        }
    }
    return result;
};