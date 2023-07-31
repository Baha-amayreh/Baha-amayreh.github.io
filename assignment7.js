// 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) 
//all the numbers in an array of numbers
const nums = [1, 2, 3, 4, 5, 6];
function sum(arr) {
    return arr.reduce((x, y) => x = x + y, 0);
}
function multiply(arr) {
    return arr.reduce((x, y) => x = x * y, 1);
}
console.log('Total sum of ', nums, '=', sum(nums));
console.log('multiply of ', nums, '=', multiply(nums));
//-----------------------------------------------------------------------------------
// 5 Define a function reverse() that computes the reversal of a string.
const array = 'Hi, How are you?'
function reverse(arr) {
    const char = arr.split('');
    return char.reduce((p, c) => c = c + p, '');
}
console.log('text was ', array, ', afer reverse=', reverse(array));
//-----------------------------------------------------------------------------------
// 7 Write a function filterLongWords() that takes an array of words and 
//an integer i and returns the array of words that are longer than i. 
const arrayOfWords = ['Baha', 'Amayreh', 'Yousef', 'Ahmed', 'Mohammed', 'Good Bye!'];
function filterLongWords(arr, i) {
    return arr.filter(words => words.length > i);
}
console.log('before filter array is=', arrayOfWords, ', after filter where i=6 :');
console.log(filterLongWords(arrayOfWords, 6));