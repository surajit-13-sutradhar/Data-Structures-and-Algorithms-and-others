/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const digitMap = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    if (digits.length === 0) return [];

    let result = [];
    let temp = [];

    var solve = function(idx) {
        if (idx === digits.length) {
            result.push(temp.join(""));
            return;
        }

        let chars = digitMap[digits[idx]];
        for (let char of chars) {
            temp.push(char); 
            solve(idx + 1);
            temp.pop();
        }
    }

    solve(0);
    return result;
};