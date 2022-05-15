/**
 * Splits a string containing a first and last name separated by a space.
 * - Time: O(N) linear
 * - Space: O(N - 1) linear (not totally sure on the space-complexity here)
 * 
 * @param {String} fullName A string containing a first and last name
 * @returns {Object<string>} An object with two key-value pairs for first and last name
 */
function splitName(fullName) {
    let tempName = '';
    let splitNameObj = {};

    for (let i = 0; i < fullName.length; i++) {
        if (fullName[i] === ' ') {
            splitNameObj.firstName = tempName;
            tempName = '';
            continue;
        }

        tempName += fullName[i];
    }

    splitNameObj.lastName = tempName;
    return splitNameObj;
}

// Expected: { firstName: 'Ben', lastName: 'Rosenberg' }
const name1 = 'Ben Rosenberg';

console.log(splitName(name1));