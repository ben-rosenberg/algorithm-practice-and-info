/**
 * Given a number (num), return the nearest whole number evenly divisible by
 * interval. If num exactly in the middle of the two nearest numbers evenly
 * divisible by interval, select the greater value.
 * 
 * @param {Number} num The number to be rounded
 * @param {Number} interval Round num to the nearest value evenly divisible by this number
 * @returns {Number} The rounded value
 */
function roundToInterval(num, interval) {
    
}

// Expected: 20
const num1 = 21;
const interval1 = 20;

// Expected: 20
const num2 = 30;
const interval2 = 20;

// Expected: 145
const num3 = 145;
const interval3 = 5;

// Expected: 8
const num4 = 6;
const interval4 = 4;

// Expected: -32
const num5 = -34;
const interval5 = 4;

// Expected: 160
const num6 = 146;
const interval6 = 40;

// Expected: 0
const num7 = 0;
const interval7 = 69;

console.log(roundToInterval(num1, interval1));
console.log(roundToInterval(num2, interval2));
console.log(roundToInterval(num3, interval3));
console.log(roundToInterval(num4, interval4));
console.log(roundToInterval(num5, interval5));
console.log(roundToInterval(num6, interval6));
console.log(roundToInterval(num7, interval7));
