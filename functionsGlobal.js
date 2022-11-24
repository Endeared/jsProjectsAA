// checks for word in array
function wordWithinArray(array, word) {

    if (array.indexOf(word) !== -1) {
        return true;
    } else {
        return false;
    }
};


// sum of first and last value if array is even, difference of first and last value if array is odd
function firstAndLast(array) {
    let length = array.length;
    let last = (array.length) - 1;
    let first = 0;


    if (length % 2 === 0) {
        let sum = array[first] + array[last];
        return sum;
    } else if (length % 2 !== 0) {
        let difference = array[first] - array[last];
        return difference;
    }

}


// combines two arrays
function combineArray(array1, array2) {
    let combinedArray = array1.concat(array2);

    return combinedArray;
}


// checks for three consecutive numbers in an array
function threeIncreasing(array) {
    let i = 0;
    let check = false;

    for (i = 0; i < array.length; i++) {
        let second = array[i] + 1;
        let third = array[i] + 2;
        let index2 = i + 1;
        let index3 = i + 2;
        if (second === array[index2] && third === array[index3]) {
            check = true;
        }
    }

    return check;
}


// checks if an array includes a target value (without .includes or .indexOf)
function myIncludes(array, target) {
    let i = 0;
    let check = false;

    for (i = 0; i < array.length; i++) {
        if (array[i] === target) {
            check = true;
        }
    }

    return check;
}


// checks for first occurrence of a target value within an array (without .includes or .indexOf)
function myIndexOf(array, target) {
    let i = 0;
    let check = -1;

    for (i = 0; i < array.length; i++) {
        if (array[i] === target) {
            check = i;
            break;
        }
    }

    return check;
}


// returns sum of an array
function sumArray(array) {
    let i = 0;
    let sum = 0;

    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}


// returns product of an array
function productWithReduce(array) {
    let i = 0;
    let product = 1;

    for (i = 0; i < array.length; i++) {
        product *= array[i];
    }

    return product;
}


// doubles every value in an array, returning a new array
function doubler(array) {
    let doubledArray = [];
    let i = 0;

    for (i = 0; i < array.length; i++) {
        let doubledValue = array[i] * 2;
        doubledArray.push(doubledValue);
    }

    return doubledArray;
}


// check for if a number is prime
function isPrime(number) {
    let i = 2;

    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


// returns laligat sum of a number using isPrime function
function laligatSum(number) {
    let sum = 0;
    let i = 2;

    for (i = 2; i <= number; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}


// returns new array containing only prime numbers in target array using isPrime function
function choosePrimes(array) {
    let i = 0;
    let primeArray = [];

    for (i = 0; i < array.length; i++) {
        if (isPrime(array[i]) === true) {
            primeArray.push(array[i]);
        }
    }

    return primeArray;

}


// returns the closest prime number greater than the target number using the isPrime function
function nextPrime(number) {
    let i = number + 1;

    for (i = number + 1; i < Infinity; i++) {
        if (isPrime(i) === true) {
            return i;
        }
    }
}


// returns an array of numbers that are prime and factors of the target number using the isPrime function
function primeFactors(number) {
    let i = 2;
    let factorsArray = [];

    for (i = 2; i <= number; i++) {
        if (isPrime(i) === true) {
            if (number % i === 0) {
                factorsArray.push(i);
            }
        }
    }

    return factorsArray;
}


// counts all divisors of an inputted number
function countDivisors(number) {
    let i = 0;
    let divisorCount = 0;

    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            divisorCount++;
        }
    }

    return divisorCount;
}


// checks if a number is anti-prime using the countDivisors function
function isAntiPrime(number) {
    let i = 0;

    for (i = number - 1; i > 0; i--) {
        if (countDivisors(number) < countDivisors(i)) {
            return false;
        }
    }

    return true;
}


// counts number of vowels in a string
function vowelCounter(string) {
    let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let vowelCount = 0;
    let i = 0;

    for (i = 0; i < string.length; i++) {
        let char = string[i];
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}


// determines which word in a sentence contains the most vowels using vowelCounter function
function mostVowels(sentence) {
    let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let stringWords = sentence.split(" ");
    let topIndex = 0;
    let currentCount = 0;
    let i = 0;

    for (i = 0; i < stringWords.length; i++) {
        if (vowelCounter(stringWords[i]) > currentCount) {
            currentCount = vowelCounter(stringWords[i]);
            topIndex = stringWords[i];
        }
    }

    return topIndex;
}


// returns value of half of sum of array if array contains said half value, otherwise returns null. uses sumArray function
function allElseEqual(array) {
    // your code here
    let i = 0;
    let sum = sumArray(array);
    let halfOfSum = sum / 2;

    for (i = 0; i < array.length; i++) {
        if (array[i] === halfOfSum) {
            return halfOfSum;
        }
    }

    return "null";
}


// checks if an inputted value / variable is a number, and returns a response appropriately
function checkIfNumber(input) {
    if (typeof input === 'number') {
        console.log("Valid!")
    } else {
        console.log("Invalid input.")
    }
}


// checks if an inputted value / variable is an array, and returns a response appropriately
function checkIfArray(input) {
    if (Array.isArray(input) === true) {
        console.log("Valid array!")
    } else {
        console.log("Not an array.")
    }
}


// searches for pairs of consecutive letters in a string, returns true / false / null
function hasDoubleLetter(string) {
    let doubles = ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz"]

    if (typeof string !== 'string') {
        return null;
    }

    if (doubles.some(doubles => string.includes(doubles))) {
        return true;
    }

    return false;
}


// searches string for the first vowel, returns the first vowel
function firstVowel(string) {
    let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let i = 0;

    if (typeof string !== 'string') {
        return null;
    }

    for (i = 0; i < string.length; i++) {
        let currentChar = string[i];
        if (vowels.includes(currentChar)) {
            return string[i];
        }
    }

    return null;
}


// searches string for last vowel, returns the last vowel
function lastVowel(string) {
    let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let i = 0;

    if (typeof string !== 'string') {
        return null;
    }

    for (i = string.length - 1; i >= 0; i--) {
        let currentChar = string[i];
        if (vowels.includes(currentChar)) {
            return string[i];
        }
    }

    return null;
}


// checks for smallest value in an array and returns that value
function minValue(nums) {
    if (Array.isArray(nums) !== true) {
        return null;
    }

    let i = 0;
    let compare = Infinity;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] < compare) {
            compare = nums[i];
        }
    }

    if (compare === Infinity) {
        return null;
    }

    return compare;
}


// returns average of sum of all values in an array
function avgVal(array) {
    if (Array.isArray(array) !== true) {
        return null;
    }

    let i = 0;
    let total = 0;

    for (i = 0; i < array.length; i++) {
        total += array[i];
    }

    let result = total / array.length;

    if (result === null || isNaN(result)) {
        return null;
    }

    return result;
}


// returns largest value in an array
function maxValue(nums) {
    if (Array.isArray(nums) !== true) {
        return null;
    }

    let i = 0;
    let compare = -Infinity;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] > compare) {
            compare = nums[i];
        }
    }

    if (compare === -Infinity || compare === null || isNaN(compare)) {
        return null;
    }

    return compare;
}


// reverb a string
function reverb(string) {
    if (typeof string !== 'string') {
        return null;
    }

    let last1 = string[string.length - 1];
    let last2 = string[string.length - 2];
    let last3 = string[string.length - 3];

    let result = string + last3 + last2 + last1;

    return result;
}


// returns largest prime number less than target number. uses isPrime function
function prevPrime(number) {
    if (typeof number !== 'number') {
        return null;
    }

    let i = 0;

    for (i = number - 1; i > 2; i--) {
        if (isPrime(i) === true) {
            return i;
        }
    }

    return null;
}


// mutates an array by adding the mutator to each array value
function additionMutator(array, mutator) {
    if (Array.isArray(array) !== true) {
        return null;
    }

    let i = 0;

    for (i = 0; i < array.length; i++) {
        array[i] += mutator;
    }
}


// takes in an array of strings, returns an array where every even string is caps, every odd string is lowercase
function alternatingWords(array) {
    if (Array.isArray(array) !== true) {
        return null;
    }

    let i = 0;
    let newArray = [];

    for (i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            let evenString = array[i].t5oUpperCase();
            newArray.push(evenString);
        } else {
            let oddString = array[i].toLowerCase();
            newArray.push(oddString);
        }
    }

    console.log(newArray);
}


// takes in a string and returns the string reversed, character by character
function reverseString(str) {
    if (typeof str !== 'string') {
        return null;
    }

    let reversedString = "";
    let i = 0;

    for (i = str.length - 1; i > -1; i--) {
        let currentChar = str[i];
        reversedString += currentChar;
    }

    return reversedString;
}


// takes a word / string, removes last vowel (if possible), returns word / string
function removeLastVowel (word) {
    if (typeof word !== 'string') {
        return null;
    }

    let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    let i = 0;

    for (i = word.length - 1; i > -1; i--) {
        let currentChar = word[i];
        if (vowels.includes(currentChar)) {
            word = word.replace(word[i], "");
            return word;
        }
    }

    return word;
}


// checks if a word / string contains the letter e / how many times it occurs
function containsE(word) {
    let i = 0;
    let e = ["e", "E"];
    let eCount = 0;

    for (i = 0; i < word.length; i++) {
        let currentChar = word[i];
        if (e.includes(currentChar)) {
            eCount++;
        }
    }

    return eCount;
}


// returns sentence with words containing e removed, uses containsE function
function removeEWords(sentence) {
    let e = ["e", "E"];
    let sentenceWords = sentence.split(" ");
    let i = 0;
    let newSentence = "";

    for (i = 0; i < sentenceWords.length; i++) {
        if (containsE(sentenceWords[i]) > 0) {
        } else if (containsE(sentenceWords[i]) <= 0) {
            newSentence = newSentence + sentenceWords[i] + " ";
        }
    }

    return newSentence;
}


// takes in a location, element, and array - adds element to location of array depending on location input (first / last)
function addToArray(location, element, arr) {
    let unshiftOptions = ["front", "Front", "FRONT", "f"];
    let pushOptions = ["back", "Back", "BACK", "b", "end", "End", "END", "e"];

    if (unshiftOptions.indexOf(location) !== -1) {
        arr.unshift(element);
    } else if (pushOptions.indexOf(location) !== -1) {
        arr.push(element);
    } else {
        console.log("ERROR");
    }

}


// takes in a min integer and max integer, returns an array with every integer in between min-max
function range(min, max) {
    let i = 0;
    let newArray = [];

    for (i = min; i <= max; i++) {
        newArray.push(i);
    }

    return newArray;
}


// takes in a max integer, and returns an array with every even positive even integer less than max
function evenNumbers(max) {
    if (typeof max !== 'number') {
    return null;
    }

    let i = 0;
    let evenArray = [];

    for (i = 2; i < max; i += 2) {
        evenArray.push(i);
    }

    return evenArray;
}


// takes in a min integer, max integer, step integer, and prints out every integer between min-max in step intervals
function logBetweenStepper(min, max, step) {
    for (i = min; i <= max; i += step) {
        console.log(i);
    }
}


// takes in an a positive integer, returns an array of all positive factors of the integer
function factorsOf(num) {
    if (typeof num !== 'number') {
        return "Not a number!";
    } else if (num < 0) {
        return "Not a positive integer!"
    }

    let factorsArray = [];
    let i = 0;

    for (i = 1; i <= num; i++) {
        if (num % i === 0) {
            factorsArray.push(i);
        }
    }

    return factorsArray;
}


// takes in a positive integer max, returns an array of all positive integers less than max that fit fizzbuzz (lol)
function fizzBuzz(max) {
    if (typeof max !== 'number') {
        return "Not a number!";
    } else if (max < 0) {
        return "Not a positive integer!"
    }

    let fizzBuzzArray = [];
    let i = 0;

    for (i = 3; i < max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
        } else if (i % 3 === 0) {
            fizzBuzzArray.push(i);
        } else if (i % 5 === 0) {
            fizzBuzzArray.push(i);
        }
    }

    return fizzBuzzArray;
}


// takes in pos. int max, returns array of all pos. ints less than max that fit pitPat conditions (lol)
function pitPat(max) {
    if (typeof max !== 'number') {
        return "Not a number!";
    } else if (max < 0) {
        return "Not a positive integer!"
    }

    let pitPatArray = [];
    let i = 0;

    for (i = 4; i <= max; i++) {
        if (i % 4 === 0 && i % 6 === 0) {
        } else if (i % 4 === 0) {
            pitPatArray.push(i);
        } else if (i % 6 === 0) {
            pitPatArray.push(i);
        }
    }

    return pitPatArray;
}


// takes in a base int, length int, returns an array of every int up to base * length that is divisible by base
function doubleSequence(base, length) {
    let newArray = [];
    let i = 0;

    for (i = 1; i <= length; i++) {
        let pushValue = base * i;
        newArray.push(pushValue);
    }

    return newArray;
}


// takes in start int, length int, returns array up to length int in length, where each value is 3 times the prev value
function tripleSequence(start, length) {
    let newArray = [];
    let i = 0;


    newArray.push(start);
    let prevValue = start;
    for (i = 1; i < length; i++) {
        let pushValue = prevValue * 3;
        newArray.push(pushValue);
        prevValue = pushValue;
    }

    return newArray;
}


// takes in an array, returns an array with no duplicate values
function unique(array) {
    if (Array.isArray(array) !== true) {
        return "Not an array!"
    }

    let newArray = [];
    let i = 0;

    for (i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}


// takes in an array of words, returns array with each word yelled
function yeller(words) {
    if (Array.isArray(words) !== true) {
        return "Not an array!"
    }

    let newArray = [];
    let i = 0;

    for (i = 0; i < words.length; i++) {
        let yelledValue = words[i].toUpperCase() + "!";
        newArray.push(yelledValue);
    }

    return newArray;
}


// takes in array of numbers, returns array with each number tripled
function tripler(nums) {
    if (Array.isArray(nums) !== true) {
        return "Not an array!"
    }

    let newArray = [];
    let i = 0;

    for (i = 0; i < nums.length; i++) {
        let tripledValue = nums[i] * 3;
        newArray.push(tripledValue);
    }

    return newArray;
}


// takes in an array of words, returns an array with only words longer than 5 characters
function longWords(words) {
    if (Array.isArray(words) !== true) {
        return "Not an array!";
    }

    let i = 0;
    let newArray = [];

    for (i = 0; i < words.length; i++) {
        if (words[i].length > 5) {
            newArray.push([words[i]]);
        }
    }

    return newArray;
}


// takes an array of strings / words and a designated suffix, returns an array with words / strings that only end with suffix
function chooseyEndings(array, suffix) {
    let i = 0;
    let newArray = [];

    for (i = 0; i < array.length; i++) {
        if (array[i].endsWith(suffix)) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}


// takes in two numbers, returns all int lower than biggest number that are factors of both nums
function commonFactors(num1, num2) {
    if (typeof num1 !== 'number' && typeof num2 !== 'number') {
        return "Invalid input(s)!"
    }

    let i = 0;
    let newArray = [];
    let biggerValue = 0;

    if (num1 >= num2) {
        biggerValue = num1;
    } else if (num2 >= num1) {
        biggerValue = num2;
    }

    for (i = 0; i < biggerValue; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            newArray.push(i);
        }
    }

    return newArray;
}


// takes in an array of values, returns an array of the sum of every value of i + (i + 1)
function adjacentSums(array) {
    if (Array.isArray(array) !== true) {
        return "Not an array!"
    }

    let i = 0;
    let firstValue = 0;
    let secondValue = 0;
    let sumValue = 0;
    let newArray = [];

    for (i = 0; i < array.length - 1; i++) {
        firstValue = array[i];
        secondValue = array[i + 1];
        sumValue = firstValue + secondValue;
        newArray.push(sumValue);
    }

    return newArray;
}


// takes a num and returns fib array up to interval of that num. messy, crude, and ugly, but first method i could think of
function fibonacciSequence(number) {
    if (typeof number !== 'number') {
        return "Not a number!"
    }

    let i = 0;
    let prevNum1 = 1;
    let prevNum2 = 1;
    let sum = 0;
    let fibArray = [];

    if (number <= 0) {
        return fibArray;
    } else if (number === 1) {
        fibArray.push(1);
        return fibArray;
    } else if (number === 2) {
        fibArray.push(1, 1);
        return fibArray;
    }

    fibArray.push(1, 1);
    for (i = 3; i <= number; i++) {
        sum = prevNum1 + prevNum2;
        fibArray.push(sum);
        prevNum2 = prevNum1;
        prevNum1 = sum;
    }

    return fibArray;
}


// takes an array of numbers, returns array containing only prime numbers in array. uses unique function
function pickPrimes(array) {
    if (Array.isArray(array) !== true) {
        return "Not an array!"
    }

    let newArray = [];
    let i = 0;
    let j = 0;

    for (i = 0; i < array.length; i++) {
        for (j = 2; j <= array[i]; j++) {
            if (array[i] === 2) {
                newArray.push(2);
            } else if (array[i] % j === 0) {
                break;
            } else {
                newArray.push(array[i]);
            }
        }
    }

    return unique(newArray);
}


// takes in an array of numbers, returns an array where every even number is replaced with its greatest factor
function greatestFactorArray(array) {
    if (Array.isArray(array) !== true) {
        return "Not an array!"
    }

    let newArray = [];
    let i = 0;
    let j = 0;
    let greatestFactor = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            for (j = 1; j < array[i]; j++) {
                if (array[i] % j === 0) {
                    greatestFactor = j;
                }
            }
            newArray.push(greatestFactor);
        } else if (array[i] % 2 != 0) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}


// returns summation of a number
function summation(number) {
    let i = 0;
    let runningSum = 0;

    for (i = 0; i <= number; i++) {
        runningSum = runningSum + i;
    }

    return runningSum;
}


// returns an array of summations of a sequence of inputted length, uses summation function
function summationSequence(start, length) {
    let i = 0;
    let runningNum = start;
    let newArray = [];
    let runningSummation = 0;

    newArray.push(start);

    for (i = 1; i < length; i++) {
        runningSummation = summation(runningNum);
        runningNum = runningSummation;
        newArray.push(runningSummation);
    }

    return newArray;
}


// removes first or last value from an array depending on user input
function removeFromArray(location, arr) {
    let unshiftOptions = ["front", "Front", "FRONT", "f"];
    let pushOptions = ["back", "Back", "BACK", "b", "end", "End", "END", "e"];

    if (unshiftOptions.indexOf(location) !== -1) {
        arr.shift();
    } else if (pushOptions.indexOf(location) !== -1) {
        arr.pop();
    } else {
        console.log("Error.")
    }
}


// takes in an array and removes the last num values of said array, returns new array with popped values
function popper(array, num) {
    let i = 0;
    let j = 0;
    let newArray = [];

    for (j = array.length - 1; j >= array.length - num; j--) {
        newArray.push(array[j]);
    }

    for (i = 0; i < num; i++) {
        array.pop();
    }

    return newArray;
}


// takes an array and returns an array with all values shifted right 2 spaces
function rotateRight(array, num) {
    let i = 0;
    let originalArray = [];
    let secondStrand = array.slice(array.length - num);

    for (i = 0; i < array.length - num; i++) {
        originalArray.push(array[i]);
    }

    let resultArray = secondStrand.concat(originalArray);
    return resultArray;
}


// takes an array, rotates either left or right by num amount. abs.num must be < abs.array length
function rotate(array, num) {
    let i = 0;
    let positiveStrand = array.slice(array.length - num);
    let negativeStrand = array.slice(0 + num);

    if (num > array.length || num < -array.length) {
        console.log("Invalid input!");
        return;
    } else if (num < 0) {
        for (i = 0; i > num; i--) {
            array.shift()
        }
        array.push(...negativeStrand)
    } else if (num >= 0) {
        for (i = 0; i < num; i++) {
            array.pop()
        }
        array.unshift(...positiveStrand)
    }
}


// takes string of words (preferably first + last names), returns initials as a string
function initials(name) {
    let nameWords = name.split(" ");
    let i = 0;
    let initials = ""

    console.log(nameWords);

    for (i = 0; i < nameWords.length; i++) {
        let word = nameWords[i];
        initials += word[0];
    }

    let result = initials.toUpperCase();
    return result;
}
