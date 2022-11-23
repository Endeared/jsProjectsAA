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
