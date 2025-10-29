/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let n = rooms.length;
    // visited array to keep track of visited rooms, initially all set to false
    let visited = new Array(n).fill(false);
    // queue is to store indices or room numbers
    let queue = [0];
    // 0th room is visited 
    visited[0] = true;

    while (queue.length > 0) {
        // take out one room from the queue 
        const room = queue.shift();
        // now traverse through each key array of rooms array (room acts as the room number as well as index)
        for (let key of rooms[room]) {
            if (!visited[key]) {
                visited[key] = true;
                queue.push(key);
            }
        }
    }

    return visited.every((v) => v === true)

};