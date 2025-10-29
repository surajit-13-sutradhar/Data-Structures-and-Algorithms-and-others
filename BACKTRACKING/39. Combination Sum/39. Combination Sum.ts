function combinationSum(candidates: number[], target: number): number[][] {
    let temp: number[] = [];
    let result: number[][] = [];
    let tempSum = 0;
    let n = candidates.length;

    var solve = function(idx: number): void {
        if (tempSum === target) {
            result.push([...temp]); // push a copy of temp in result
            return;
        }

        if (tempSum > target) return;

        for (let i = idx; i < n; i++) {
            tempSum += candidates[i];
            temp.push(candidates[i]);
            solve(i); // to allow the same element to be used again
            tempSum -= candidates[i]; // backtrack
            temp.pop();
        }
    }

    solve(0);
    return result;
};