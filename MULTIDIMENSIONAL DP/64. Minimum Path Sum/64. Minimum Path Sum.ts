function minPathSum(grid: number[][]): number {
    let rows: number = grid.length;
    let cols: number = grid[0].length;

    // a 2d memoisation array to store the minimum sum upto THAT cell
    let memo: number[][] = Array.from({ length: rows }, () => Array(cols).fill(Infinity));

    function solve(i: number, j: number): number {
        // for out of bound cases
        if (i < 0 || i >= rows || j < 0 || j >= cols) return Infinity;
        // if reached till end, return the value in the grid, as the minimum sum of that cell to itself
        // is the value in the cell itself
        if (i === rows - 1 && j === cols - 1) {
            return grid[i][j];
        }

        // if the minimum Sum exists in the memo array, return that
        if (memo[i][j] !== Infinity) return memo[i][j];

        const down = solve(i + 1, j); // go down
        const right = solve(i, j + 1); // go right

        // caching the minimum path sum
        memo[i][j] = grid[i][j] + Math.min(down, right);
        return memo[i][j];
    }

    return solve(0, 0);
};