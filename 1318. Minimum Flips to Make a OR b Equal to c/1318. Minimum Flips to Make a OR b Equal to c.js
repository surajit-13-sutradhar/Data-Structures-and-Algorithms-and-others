/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    // initialise a flip variable
    let flip = 0;
    // while a, b and c are not zero
    while (a !== 0 || b !== 0 || c !== 0) {
        // if leftmmost bit of c is 0
        if ((c & 1) === 0) {
            // both a and b must be 0, so
            if ((a & 1) === 1) flip++;
            if ((b & 1) === 1) flip++;
        } else {    // i.e. left most be in c must be 1 
            // only one of a and b being 1 is enough
            // so we increment flip by 1 if BOTH are 0
            if ((a & 1) === 0 && (b & 1) === 0) flip++;
        }
        // right shift a, b and c
        a = a >> 1;
        b = b >> 1;
        c = c >> 1;
    }

    return flip;
};