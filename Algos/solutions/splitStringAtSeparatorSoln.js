/**
 * Splits a string into segments separated by the separator string.
 * - Time: O(N * M) (I'm very unsure on this one, but I'm thinking it's
 *   something like the length of the input times the length of the separator
 * - Space: O(N + M) (Also very unsure)
 * 
 * @param {String} input The string to be separated
 * @param {String} separator The string at which to separate the input
 * @return {Array<String>} An array consisting of the segments of input
 *   separated by separator
 */
function splitStringAtSeparator(input, separator) {
    const resultArr = [];
    let tempStrPortion = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i] === separator[0]) {
            let isFullSeparator = true;
            let j = 0;

            for ( ; j < separator.length; j++) {
                if (input[j + i] !== separator[j]) {
                    isFullSeparator = false;
                    break;
                }
            }

            if (isFullSeparator) {
                resultArr.push(tempStrPortion);
                tempStrPortion = '';
                i += separator.length - 1;
                continue;
            }
            
        }

        tempStrPortion += input[i];
    }

    resultArr.push(tempStrPortion);
    return resultArr;
}

const str1 = 'here is a string';
const separator1 = ' ';

const str2 = 'this: is: a: weird: string';
const separator2 = ': ';

const str3 = "This is a sentence. And here's another one...but not this. This should be the third element in the return array."
const separator3 = '. ';

console.log(splitStringAtSeparator(str1, separator1));
console.log(splitStringAtSeparator(str2, separator2));
console.log(splitStringAtSeparator(str3, separator3));