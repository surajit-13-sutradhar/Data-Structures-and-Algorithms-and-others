/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    let n = word.length;

    // keep a visited 2d array to keep track of visited cells
    // initially all cells are initialised to false
    let visited = Array.from({length: rows}, () => Array(cols).fill(false));

    var solve = function(idx, row, col) {
        if (idx === word.length) return true;

        // check if row and columns are out of bounds, if cell is already visited, if the current cell value doesn't 
        // match the word[idx]
        if (row < 0 || col < 0 || row >= rows || col >= cols || 
        visited[row][col] || board[row][col] !== word[idx]) return false;

        visited[row][col] = true;

        // move to next index of the word
        let found = 
        solve(idx + 1, row + 1, col) ||
        solve(idx + 1, row - 1, col) ||
        solve(idx + 1, row, col + 1) ||
        solve(idx + 1, row, col - 1)

        // backtracking step
        visited[row][col] = false;;

        // if any of the recursion succeeds, it will return true
        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (solve(0, i, j)) return true;;
        }
    }
    return false;
};