console.log('start!')
// Define the myFunctionTest() function for testing
function myFunctionTest(expected, actual) {
    if (expected === actual) {
        console.log("TEST SUCCEEDED");
    } else {
        console.log("TEST FAILED. Expected: " + expected + ", but got: " + actual);
    }
}
console.log('-------------------------Question1---------------------------')
// Define the max() function
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Test the max() function using myFunctionTest()
console.log("Expected output of max(20, 10) is 20 and " + "actual output is " + max(20, 10));
myFunctionTest(20, max(20, 10));
console.log('-------------------------Question2---------------------------')
function maxOfThree(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}

// Test the max() function using myFunctionTest()
console.log("Expected output of max(20, 10,30) is 30 and " + "actual output is " + maxOfThree(20, 10, 30));
myFunctionTest(30, maxOfThree(20, 10, 30));

console.log("Expected output of max(20, 10,30) is 30 and " + "actual output is " + maxOfThree(20, 10, 30));
myFunctionTest(40, maxOfThree(20, 10, 30));
console.log('-------------------------Question3---------------------------')
function isVowel(character) {
    const lowercaseChar = character.toLowerCase();
    if (
        lowercaseChar === 'a' ||
        lowercaseChar === 'e' ||
        lowercaseChar === 'i' ||
        lowercaseChar === 'o' ||
        lowercaseChar === 'u'
    ) {
        return true;
    }

    return false;
}
console.log("Expected output of isVowel('a') is true and " + "actual output is " + isVowel('a'));
myFunctionTest(true, isVowel('a'));
console.log("Expected output of isVowel('e') is true and " + "actual output is " + isVowel('e'));
myFunctionTest(true, isVowel('e'));
console.log("Expected output of isVowel('t') is false and " + "actual output is " + isVowel('t'));
myFunctionTest(false, isVowel('t'));
console.log("Expected output of isVowel('t') is true and " + "actual output is " + isVowel('t'));
myFunctionTest(true, isVowel('t'));
console.log('-------------------------Question4---------------------------')
function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function multiply(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}

console.log("Expected output of sum([1, 2, 3, 4]) is 10 and " + "actual output is " + sum([1, 2, 3, 4]));
myFunctionTest(10, sum([1, 2, 3, 4]));
console.log("Expected output of sum([1, 2, 3, 0]) is 5 and " + "actual output is " + sum([1, 2, 3, 4]));
myFunctionTest(5, sum([1, 2, 3, 0]));

console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " + "actual output is " + multiply([1, 2, 3, 4]));
myFunctionTest(10, sum([1, 2, 3, 4]));
console.log("Expected output of multiply([1, 2, 3, 4]) is 25 and " + "actual output is " + multiply([1, 2, 3, 4]));
myFunctionTest(25, multiply([1, 2, 3, 4]));
console.log('-------------------------Question5---------------------------')

function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

console.log("Expected output of reverse('jag testar') is ratset gaj and " + "actual output is " + reverse('jag testar'));
myFunctionTest("ratset gaj", reverse('jag testar'));
console.log('-------------------------Question6---------------------------')
function findLongestWord(words) {
    let longest = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }
    return longest;
}
console.log("Expected output of findLongestWord(['apple', 'banana', 'cherry']) is 6 and " + "actual output is " + findLongestWord(["apple", "banana", "cherry"]));
myFunctionTest(6, findLongestWord(["apple", "banana", "cherry"]));
console.log("Expected output of findLongestWord(['apple', 'banana', 'cherry']) is 5 and " + "actual output is " + findLongestWord(["apple", "banana", "cherry"]));
myFunctionTest(5, findLongestWord(["apple", "banana", "cherry"]));
console.log('-------------------------Question7---------------------------')
function filterLongWords(words, i) {
    const filteredWords = [];
    for (let j = 0; j < words.length; j++) {
        if (words[j].length > i) {
            filteredWords.push(words[j]);
        }
    }
    return filteredWords;
}
console.log("Expected output of filterLongWords(['apple', 'banana', 'cherry'],5) is 'banana', 'cherry' and " + "actual output is " + filterLongWords(["apple", "banana", "cherry"], 5));
myFunctionTest("banana,cherry", filterLongWords(["apple", "banana", "cherry"], 5));
console.log(filterLongWords(["apple", "banana", "cherry"], 5)); // Output: ["banana", "cherry"]
console.log('-------------------------Question8---------------------------')
const a = [1, 3, 5, 3, 3];
const multiplied = a.map(function (elem) {
    return elem * 10;
});
console.log(multiplied);
const equalThree = a.map(function (elem) {
    return 3;
});
console.log(equalThree);
const product = a.reduce(function (prevVal, elem) {
    return prevVal * elem;
});
console.log(product);
console.log('-------------------------Done!---------------------------')

