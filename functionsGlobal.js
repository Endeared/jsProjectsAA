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
function removeLastVowel(word) {
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


// takes in sentence, returns longest word in sentence
function longestWord(sentence) {
    let words = sentence.split(" ");
    let i = 0;
    let highestLength = 0;
    let storedString = 0;

    for (i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let currentLength = currentWord.length;
        if (currentLength > highestLength) {
            storedString = words[i];
        }
        highestLength = currentLength;
    }

    if (storedString === 0) {
        return "";
    }

    return storedString;
}


// takes in sentence, returns shortest word in sentence
function shortestWord(sentence) {
    let words = sentence.split(" ");
    let i = 0;
    let lowestLength = Infinity;
    let storedString = 0;

    for (i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let currentLength = currentWord.length;
        if (currentLength <= lowestLength) {
            storedString = words[i];
            lowestLength = currentLength;
        }
    }

    return storedString;
}


// takes in a sentence, and reverses it word for word
function reverseSentence(sentence) {
    let words = sentence.split(" ");
    let i = 0;
    let reversed = [];

    for (i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }

    let result = reversed.join(" ");

    return result;
}


// takes in a string / sentence and target word, checks for target word in string / sentence
function containsWord(sentence, targetWord) {
    let newSentence = sentence.toLowerCase();
    let newTarget = targetWord.toLowerCase();
    let words = newSentence.split(" ");

    if (words.indexOf(newTarget) !== -1) {
        return true;
    } else {
        return false;
    }
}


// removes all vowels from a word
function removeVowels(word) {
    let vowels = "aeiouAEIOU";
    let removed = "";
    let i = 0;

    for (i = 0; i < word.length; i++) {
        let currentChar = word[i];
        if (vowels.includes(currentChar)) {
        } else {
            removed += currentChar;
        }
    }

    return newWord;
}


// removes all vowels from any word in a sentence longer than 4 characters
function abbreviateWords(sentence) {
    let words = sentence.split(" ");
    let i = 0;
    let newArray = [];

    for (i = 0; i < words.length; i++) {
        let currentWord = words[i];
        if (currentWord.length > 4) {
            let newWord = removeVowels(currentWord);
            newArray.push(newWord);
        } else {
            newArray.push(words[i]);
        }
    }

    let newSentence = newArray.join(" ");
    return newSentence;
}


// takes in snake_cased string, returns PascalCased string
function snakeToCamel(string) {
    let words = string.split("_");
    let newWords = [];
    let i = 0;

    for (i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let newWord = currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase();
        newWords.push(newWord);
    }

    let newSentence = newWords.join("");
    return newSentence;
}


// takes in sentence, returns sentence where every word is missing last vowel, uses removeLastVowel function
function hipsterfy(sentence) {
    let words = sentence.split(" ");
    let newWords = [];
    let i = 0;

    for (i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let newWord = removeLastVowel(currentWord);
        newWords.push(newWord);
    }

    let newSentence = newWords.join(" ");
    return newSentence;
}


// takes in a word, returns the word repeated
function repeatWord(word) {
    let i = 0;
    let newWord = word + word;

    return newWord;
}


// takes in word, repeats all letters after last vowel
function repeatLetters(word) {
    let i = 0;
    let vowels = "aeiouAEIOU";

    for (i = word.length - 1; i >= 0; i--) {
        let currentChar = word[i];
        if (vowels.includes(currentChar)) {
            let newWord = word.slice(i);
            let result = word + newWord;
            return result;
        }
    }
}


/* takes in sentence, returns sentence where words > 3 chars ending in a vowel are repeated, while words > 3 chars ending in
consonant repeat all letters after last vowel. uses repeatWord & repeatLetters functions */
function repeatingTranslate(sentence) {
    let words = sentence.split(" ");
    let vowels = "aeiouAEIOU";
    let i = 0;
    let newArray = [];

    for (i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let reference = currentWord.length - 1;
        let lastLetter = currentWord[reference];
        if (currentWord.length < 3) {
            newArray.push(currentWord);
        } else if (currentWord.length >= 3 && vowels.includes(lastLetter)) {
            newArray.push(repeatWord(currentWord));
        } else {
            newArray.push(repeatLetters(currentWord));
        }
    }

    let result = newArray.join(" ");
    return result;
}


// takes in sentence, returns sentence where each word begins at its first vowel
function consonantCancel(sentence) {
    let vowels = "aeiouAEIOU";
    let i = 0;
    let j = 0;
    let words = sentence.split(" ");
    let newArray = [];

    for (i = 0; i < words.length; i++) {
        let currentWord = words[i];
        for (j = 0; j < currentWord.length; j++) {
            let currentChar = currentWord[j];
            if (vowels.includes(currentChar)) {
                let newWord = currentWord.slice(j)
                newArray.push(newWord);
                break;
            } else if (j === currentWord.length - 1) {
                newArray.push(currentWord);
            }
        }
    }

    let result = newArray.join(" ");
    return result;
}


// takes in string, returns collapsed string
function sameCharCollapse(str) {
    let i = 0;
    let reducible = true;

    while (reducible) {
        let letters = str.split("")
        reducible = false;

        for (i = 0; i < letters.length - 1; i++) {
            if (letters[i] === letters[i + 1]) {
                letters[i] = "";
                letters[i + 1] = "";
                reducible = true;
            }
        }
        str = letters.join("");
    }

    return str;
}


// takes in array of values, returns 2d box array of all possible unique value pairings
function pairsMaker(arr) {
    if (Array.isArray(arr) !== true) {
        return null;
    }

    let i = 0;
    let j = 0;
    let returnArray = [];

    for (i = 0; i < arr.length; i++) {
        let value1 = arr[i];
        for (j = i + 1; j < arr.length; j++) {
            let value2 = arr[j];
            let currentPair = [value1, value2]
            returnArray.push(currentPair);
        }
    }

    return returnArray;
}


// takes in array of numbers and a target, if any pair of values in array adds up to target, return true, else false
function twoSum(arr, target) {
    let i = 0;
    let j = 0;
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        let value1 = arr[i];
        for (j = i + 1; j < arr.length; j++) {
            let value2 = arr[j];
            sum = value1 + value2;
            if (sum === target) {
                return true;
            } else {
                sum = 0;
            }
        }
    }

    return false;
}


// takes in array of nums and target product, if any pair of values in array multiply to target, return true, else false
function pairProduct(array, product) {
    let i = 0;
    let j = 0;
    let prod = 0;

    for (i = 0; i < array.length; i++) {
        let value1 = array[i];
        for (j = i + 1; j < array.length; j++) {
            let value2 = array[j];
            prod = value1 * value2;
            if (prod === product) {
                return true;
            } else {
                prod = 0;
            }
        }
    }

    return false;
}


// takes in array of nums, returns how many unique pairs of nums have a sum of 0
function strangeSums(array) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let zeroSumCount = 0;

    for (i = 0; i < array.length; i++) {
        let value1 = array[i];
        for (j = i + 1; j < array.length; j++) {
            let value2 = array[j];
            sum = value1 + value2;
            if (sum === 0) {
                zeroSumCount++;
                sum = 0;
            } else {
                sum = 0;
            }
        }
    }

    return zeroSumCount;
}


// takes in 2d array, returns sum of 2d array
function twoDimensionalSum(array) {
    let sum = 0;
    let i = 0;
    let j = 0;

    for (i = 0; i < array.length; i++) {
        let currentArray = array[i];
        for (j = 0; j < currentArray.length; j++) {
            sum += currentArray[j];
        }
    }

    return sum;
}


// takes in 2d array, returns product of 2d array
function twoDimensionalProduct(array) {
    let i = 0;
    let j = 0;
    let product = 1;

    for (i = 0; i < array.length; i++) {
        let currentArray = array[i];
        for (j = 0; j < currentArray.length; j++) {
            product *= currentArray[j];
        }
    }

    return product;
}


// takes in 2d array / matrix, returns largest value
function maxInMatrix(matrix) {
    let i = 0;
    let j = 0;
    let max = -Infinity;

    for (i = 0; i < matrix.length; i++) {
        let currentArr = matrix[i];
        for (j = 0; j < currentArr.length; j++) {
            if (currentArr[j] >= max) {
                max = currentArr[j];
            }
        }
    }

    return max;
}


// takes in 2d array / matrix, returns array with largest value in each column of 2d array / matrix
function maxColumn(matrix) {
    // your code here...
    let height = matrix.length;
    let width = matrix[0].length;
    let maxArray = [];
    let col = 0;
    let row = 0;


    for (col = 0; col < width; col++) {
        let maxOfCol = matrix[0][col]
        for (row = 1; row < height; row++) {
            if (matrix[row][col] > maxOfCol) {
                maxOfCol = matrix[row][col];
            }
        }
        maxArray.push(maxOfCol);
    }

    return maxArray;
}


// takes in 2d array of equal lengths, returns array of pairings of equal indices
function zip(array1, array2) {
    let i = 0;
    let newArray = [];

    if (array1.length !== array2.length) {
        return "Array lengths don't match."
    }

    for (i = 0; i < array1.length; i++) {
        let arr1Val = array1[i];
        let arr2Val = array2[i];
        newArray.push([arr1Val, arr2Val]);
    }

    return newArray;
}


// takes in 2d array of any length, returns array of pairings of equal indices (no value at index = null)
function zanyZip(array1, array2) {
    let i = 0;
    let newArray = [];

    for (i = 0; i < array1.length || i < array2.length; i++) {
        let val1 = array1[i];
        let val2 = array2[i];
        if (val1 === undefined) {
            val1 = null;
        }
        if (val2 === undefined) {
            val2 = null;
        }
        newArray.push([val1, val2]);
    }

    return newArray;
}


// takes in 2d matrix of equal height / width, return matrix with sum of values from each matrix at index pair
function matrixAddition(matrixA, matrixB) {
    let i = 0;
    let j = 0;
    let currentSum = 0;
    let returnArray = [];
    let returnMatrix = [];

    for (i = 0; i < matrixA.length; i++) {
        let currentRow = matrixA[i];
        for (j = 0; j < currentRow.length; j++) {
            let currentVal = matrixA[i][j];
            let secondVal = matrixB[i][j];
            currentSum = currentVal + secondVal;
            returnArray.push(currentSum);
            currentSum = 0;
        }
        returnMatrix.push(returnArray);
        returnArray = [];
    }

    return returnMatrix;
}


// take in 2d array / matrix, returns a lucky number. lucky number = min value in row and max value in col simultaneously
function luckyNumbers(matrix) {
    let benchmark = Infinity;
    let luckyNumCheck = null;
    let checkRow = [];
    let checkCol = [];
    let i = 0;
    let j = 0;
    let k = 0;

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            let currentVal = matrix[i][j];
            if (currentVal < benchmark) {
                benchmark = currentVal;
                luckyNumCheck = currentVal;
            }
        }
        checkRow.push(luckyNumCheck);
        benchmark = Infinity;
        luckyNumCheck = null;
    }
    benchmark = -Infinity;

    for (i = 0; i < matrix[0].length; i++) {
        for (j = 0; j < matrix.length; j++) {
            let currentVal = matrix[j][i];
            if (currentVal > benchmark) {
                benchmark = currentVal;
                luckyNumCheck = currentVal;
            }
        }
        checkCol.push(luckyNumCheck);
        benchmark = -Infinity;
        luckyNumCheck = null;
    }

    for (k = 0; k < checkCol.length; k++) {
        if (checkCol.indexOf(checkRow[k]) !== -1) {
            return checkRow[k];
        }
    }
}


// takes in 3x3 matrix and returns values in spiral order
function spiralOrder(matrix) {
    let newArray = [];
    let i = 0;
    let j = 0;
    let count = 0;
    let maxWidth = matrix[0].length;

    for (i = 0; i < 1; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            let currentVal = matrix[i][j];
            newArray.push(currentVal);
        }
    }
    count++;

    for (i = count; i < matrix.length; i++) {
        let currentVal = matrix[i][matrix.length - 1];
        newArray.push(currentVal);
    }

    for (i = matrix[0].length - 2; i >= 0; i--) {
        let currentVal = matrix[(matrix[0].length - 1)][i];
        newArray.push(currentVal);
    }

    for (i = 0; i <= matrix[0].length - 2; i++) {
        let col = matrix.length - 2;
        let currentVal = matrix[col][i];
        newArray.push(currentVal);
    }

    return newArray;
}


// take in array, get sum of adjacent pairs in array
function getSum(arr) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let newArray = [];

    for (i = 0; i < arr.length - 1; i++) {
        let currentValue = arr[i];
        let secondValue = arr[i + 1];
        let sum = currentValue + secondValue;
        newArray.push(sum);
    }
    return newArray;
}


// make a pyramid (factor tree) using values of array as base, uses getSum function
function pyramidArray(base) {
    let pyramidLevel = [base];
    while (pyramidLevel.length < base.length) {
        let nextLevel = getSum(pyramidLevel[0]);
        pyramidLevel.unshift(nextLevel);
    }
    return pyramidLevel;
}


// return an array of Pascal's Triangle of a set int height
function pascalsTriangle(height) {
    let triangle = [[1]];
    while (triangle.length < height) {
        let last = triangle[triangle.length - 1];
        let next = [1];
        for (let i = 0; i < last.length - 1; i++) {
            next.push(last[i] + last[i + 1]);
        }
        next.push(1);
        triangle.push(next);
    }
    return triangle;
}


// takes in a string, console.logs the echoified string
function echo(string) {
    let lower = string.toLowerCase();
    let upper = string.toUpperCase();

    let result = upper + " ... " + string + " ... " + lower;

    console.log(result);
}


// takes in word, returns it in pig latin
function pigLatinWord(word) {
    // your code here...
    let vowels = "aeiouAEIOU"
    let newString = "";
    let i = 0;

    if (vowels.includes(word[i])) {
        return (word + "yay");
    } else {
        for (i = 0; i < word.length; i++) {
            if (vowels.indexOf(word[i]) > -1) {
                let firstConsonants = word.slice(0, i);
                let middle = word.slice(i, word.length);
                newString = middle + firstConsonants + "ay";
                return newString;
            }
        }
    }

};


// returns index of target value in an array, returns cannot be found if it does not exist
function myIndexOf(arr, target) {
    if (arr.indexOf(target) !== -1) {
        return arr.indexOf(target);
    } else {
        return "Cannot be found."
    }
}


// takes in two numbers, returns least common multiple of two nums
function leastCommonMultiple(num1, num2) {
    let i = 0;

    for (i = 1; i < Infinity; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
}


// uncompresses a string
function uncompress(str) {
    let i = 0;
    let j = 0;
    let newString = "";

    for (i = 1; i < str.length; i += 2) {
        let valueOfNum = str[i];
        let char = str[i - 1];
        for (j = 0; j < valueOfNum; j++) {
            newString += char;
        }
    }

    return newString;
}


// takes in object, prints out key values for object
function printObject(obj) {
    // your code here...
    for (let key in obj) {
        let value = obj[key]
        console.log(key + " - " + value);
    }
}


// takes in object values for a cat, returns values
function catBuilder(name, color, toys) {
    let cat = {
        name: name,
        color: color,
        toys: toys
    };
    return cat;
}


// takes in object, returns array of all keys for object
function keysInObject(obj) {
    let keyArray = [];
    for (let key in obj) {
        keyArray.push(key);
    }
    return keyArray;
}


// takes in object, returns array of all values for keys of object
function valuesInObject(obj) {
    let valArray = [];
    let value;

    for (let key in obj) {
        value = obj[key]
        valArray.push(value);
    }

    return valArray;
}


// takes in object name, a key name, and value, and assigns key + value to object (if it exists)
function setKeyInObject(obj, string, value) {

    obj = {
        ...obj,
        [string]: value
    };

    return obj;
}


// takes in object with keys firstName and lastName, returns full name
function getFullName(person) {
    let objValues = [];
    objValues.push(person.firstName);
    objValues.push(person.lastName);

    let name = objValues.join(" ");

    return name;
}


// takes in object and key name, if key name exists in object, return true, else false
function doesKeyExist(obj, key) {
    if (key in obj) {
        return true;
    } else {
        return false;
    }

}


// take in object array and key name, if key name exists in object array, return true, else false
function keyInObjectArray(objArray, keyString) {
    let i = 0;

    for (i = 0; i < objArray.length; i++) {
        if (keyString in objArray[i]) {
            ;
            return true;
        }
    }

    return false;
}


// takes in object, returns all keys and values of object
function breakDownObj(obj) {
    let array = [];
    for (let key in obj) {
        array.push(key);
    }
    for (let key in obj) {
        let value = obj[key]
        array.push(value);
    }

    return (array);
}


// takes in two objects, checks for value of key in both objects
function valuePair(obj1, obj2, key) {
    let result = [];

    if (key in obj1) {
        let value = obj1[key]
        result.push(value);
    }

    if (key in obj2) {
        let value = obj2[key];
        result.push(value);
    }

    return result;
}


// takes in an object, counts how many keys contain the string "apple" in their name
function appleCounter(appleObj) {
    let appleCount = 0;

    for (let key in appleObj) {
        key = key.toLowerCase();
        if (key.includes("apple")) {
            appleCount++;
        }
    }

    return (appleCount);
}


// takes in all incoming parameters and sums them
function restSum(...otherNums) {
    let sum = 0;

    for (i = 0; i < otherNums.length; i++) {
        sum += otherNums[i];
    }

    return sum;
}


// takes in two arrays, spreads 2nd array into 1st array and returns 1st array
function spreadItOut(array1, array2) {
    array1.push(...array2);
    return array1;
}


// takes in array, returns object containing count of each value in the array
function arrayConverter(array) {
    let count = 0;
    i = 0;
    let obj = {};

    for (i = 0; i < array.length; i++) {
        let string = array[i];
        for (j = 0; j < array.length; j++) {
            if (string === array[j]) {
                count++
            }
        }
        obj = {
            ...obj,
            [string]: count
        };
        count = 0;
    }

    return obj;
}


// takes in string, returns object containing counts of each character in string
function stringConverter(string) {
    let letters = string.split("");
    let count = 0;
    let i = 0;
    let obj = {};

    for (i = 0; i < letters.length; i++) {
        let currentChar = letters[i];
        for (j = 0; j < letters.length; j++) {
            if (currentChar === letters[j]) {
                count++
            }
        }
        obj = {
            ...obj,
            [currentChar]: count
        };
        count = 0;
    }

    return obj;
}


// takes in array of objects with names + scores, returns object with score totals for each name
function countScores(people) {
    let scoreSum = 0;
    let obj = {};
    let i = 0;

    for (i = 0; i < people.length; i++) {
        let currentName = people[i].name;
        for (j = 0; j < people.length; j++) {
            let compareName = people[j].name;
            if (currentName === compareName) {
                scoreSum += people[j].score;
                obj = {
                    ...obj,
                    [currentName]: scoreSum,
                };
            }
        }
        scoreSum = 0;
    }

    return obj;
}


// takes in array and callback as args, returns callback values from array
function myForEach(array, callback) {
    let i = 0;

    for (i = 0; i < array.length; i++) {
        let value = array[i];
        callback(value, i, array);
    }

};


// takes in array and callback method, returns new array using callback on each value of original array
const arrowMyMap = (array, callback) => {
    let i = 0;
    let newArray = [];

    for (i = 0; i < array.length; i++) {
        let currentValue = array[i];
        newArray.push(callback(currentValue));
    }

    return newArray;
}

// takes in any number of numbers, returns sum of all numbers (arwfunc)
const arrowRestSum = (...numbers) => {
    let i = 0;
    let runningSum = 0;

    for (i = 0; i < numbers.length; i++) {
        runningSum += numbers[i];
    }

    return runningSum;
}


// takes in array, returns avg of array (arwfunc)
const arrowAvgValue = (array) => {
    let runningSum = 0;

    for (let i = 0; i < array.length; i++) {
        runningSum += array[i];
    }

    return (runningSum / array.length);
}


// takes in array, returns array + mirrored array (arwfunc)
const arrowMirrorArray = (array) => {
    let mirror = [];

    for (let i = array.length - 1; i > -1; i--) {
        mirror.push(array[i]);
    }

    mirror = array.concat(mirror);
    return mirror;
}

// sandwich maker based on your input (arwfunc)
const sandwichMaker = () => {
    let string = "One sandwich with tomato";

    return function (ingredient) {
        string = string + " and " + ingredient;
        return string;
    }

}


// takes in time (in ms) and function, executes function after time has passed
const funcTimer = (time, func) => {
    setTimeout(func, time);
}


// each time a specific function name is called, returns count + 1 (aka how many times that function has been called)
const hiddenCounter = () => {
    count = 0;

    return function () {
        count++;
        return count;
    }
}


// once lazyAdder is invoked 3 times, takes sum of all 3 numbers invoked
const lazyAdder = (firstNum) => {
    return function (secondNum) {
        return function (thirdNum) {
            let sum = (firstNum + secondNum + thirdNum)
            return sum;
        }
    }
}


// takes in interrupting word + string, returns string with interrupting word in between each original string word
const interrupter = (interruptingWord) => {

    return function (string) {
        let words = string.split(" ");
        let i = 1;
        let len = words.length * 2 - 1

        for (i = 1; i < len; i += 2) {
            words.splice(i, 0, interruptingWord);
        }

        let result = words.join(" ");
        return result;
    }
}


// counts down to string once n = 0... pointless, but part of the assignment :/
const countDownTimer = (n) => {

    if (n === 0) {
        return "Happy New Year!";
    }

    const checker = () => {
        n--;
        if (n <= 0) {
            return "Happy New Year!";
        } else {
            return checker;
        }
    };
    return checker;
}



// takes in height of 3 sides of rectangle, one at a time, returns vol after 3rd input
const recVolume = (height) => {
    let dimensions = [];
    dimensions.push(height);

    return function (num) {
        if (dimensions.length < 3) {
            dimensions.push(num);
        }
        if (dimensions.length >= 3) {
            let vol = 1;
            let i = 0;
            for (i = 0; i < dimensions.length; i++) {
                vol = vol * dimensions[i];
            }
            return vol;
        } else {
            return num;
        }
    }
}


// recursive subtraction of 1 until num is equal to 0
function subtractRecurse(num) {
    if (num === 0) {
        return
    } else {
        console.log(num);
        num--;
        subtractRecurse(num);
    }
}


// non-recursive substraction of 1 until num is equal to 0
function subtract(num) {
    while (num > 0) {
        console.log(num);
        num--;
    }

    return;
}


// reads through and prints out contents of array, recursive
function readThrough(nums, i = 0) {

    if (i >= nums.length) {
        return;
    } else {
        console.log(nums[i])
        readThrough(nums, i + 1);
    }
}


// returns sum of natural numbers, recursive
function sumToN(num) {
    if (num === 0) {
        return num;
    } else if (num < 0) {
        return null;
    }

    return num + sumToN(num -1)
}


// returns sum of array, recursive
function sumArray(array, i = array.length) {
    if (i <= 0) {
        return 0;
    }

    return sumArray(array, i - 1) + array[i - 1];
  }
