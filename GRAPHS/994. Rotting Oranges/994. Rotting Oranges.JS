/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let n = grid.length; // rows
    let m = grid[0].length; // cols

    let visited = Array.from({length: n}, () => Array(m).fill(0));
    let queue = [];

    // first find all the rotten oranges in the first run
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 2) {
                // push the rotten orange coordinate along with the time in queue
                queue.push([i, j, 0]);
                // set visited to 2
                visited[i][j] = 2;
            }
        }
    }

    // initialise time to 0
    let time = 0;
    // while the queue is not empty
    let drow = [-1, 0, 1, 0];
    let dcol = [0, -1, 0, 1];
    while(queue.length) { // until the queue isn't empty
        let [row, col, t] = queue.shift();
        time = Math.max(time, t);

        for (let k = 0; k < 4; k++) {
            let nrow = row + drow[k];
            let ncol = col + dcol[k];
            if (nrow >= 0 && nrow < n 
                && ncol >= 0 && ncol < m 
                && visited[nrow][ncol] !== 2 
                && grid[nrow][ncol] === 1
                ) {
                    queue.push([nrow, ncol, t + 1]);
                    visited[nrow][ncol] = 2; // mark as rotten
            }
        }
    }

    // check if any fresh orange left
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1 && visited[i][j] !== 2) {
                return -1;
            }
        }
    }

    return time;
}; 