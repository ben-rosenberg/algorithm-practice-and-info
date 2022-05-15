/**
 * Determines if the input array contains the search value.
 * - Time: O(N) linear
 * - Space: O(1) constant
 * 
 * @param {Array<any>} input The array to be searched
 * @param {any} searchValue The value to search for
 * @returns {Boolean} True if array contains searchValue, false otherwise
 */
function searchValue(input, searchValue) {
    for (let value of input) {
        if (value === searchValue) {
            return true;
        }
    }

    return false;
}

// Expected: true
const arr1 = [ 4, 13, 7, 6, -4, 0 ];
const searchValue1 = -4;

// Expected: false
const arr2 = [ ];
const searchValue2 = 2;

// Expected: true
const arr3 = [ 1, 14, 7, 7, -2 ];
const searchValue3 = 7;

console.log(searchValue(arr1, searchValue1));
console.log(searchValue(arr2, searchValue2));
console.log(searchValue(arr3, searchValue3));
