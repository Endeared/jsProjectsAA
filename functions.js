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
