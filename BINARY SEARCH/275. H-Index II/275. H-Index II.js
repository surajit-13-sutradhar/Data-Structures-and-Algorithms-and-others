/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n = citations.length;

    let low = 0, high = n - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        // papers with atleast citations[mid] citations 
        let papersWithAtleastThis = n - mid;

        if (citations[mid] === papersWithAtleastThis) {  // if exactly matches
            return citations[mid];  // return citations[mid]
        }
        else if (citations[mid] >= papersWithAtleastThis) { // if greater, move left
            high = mid - 1;
        }
        else low = mid + 1; // if less, move right
    }
    return n - low; // at the end of while loop, low is the point where we have more citations than papers
};