/**
 * @param {number} n
 * @return {number}
 */

// Brute force approach
var hammingWeight = function(n) {
    // make a result array to store the bits
    let result = [];
    let count = 0;
    
    // convert the number to binary and store the bits in the result array
    while (n > 0) {
        if (n === 1) {
            result.push(1);
            break;
        } else {
            result.push(n % 2);
            n = Math.floor(n /= 2)
        } 
    }
    // count the number of 1s in the result array
    for (let bit of result) {
        if (bit === 1) count++;
    }

    return count;
};

// Slightly optimized approach
var hammingWeight = function(n) {
    // make a result array to store the bits
    let result = [];
    let count = 0;
    
    // convert the number to binary and store the bits in the result array
    while (n > 0) {
        result.push(n & 1); // pushes 1 if lsb is 1, else 0
        n >>> 1;
    }
    // count the number of 1s in the result array
    for (let bit of result) {
        if (bit === 1) count++;
    }

    return count;
};

// Brian Kernighan algorithm
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        // In this method, at a moment there is only one set bit in the number
        // as long as the number is not zero
        n &= (n - 1);  // clear the lowest set bit
        count++;
    }
    return count;
};