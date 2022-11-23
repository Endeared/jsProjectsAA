// takes in a min integer, max integer, step integer, and prints out every integer between min-max in step intervals
let logBetweenStepper = function(min, max, step) {
    for (i = min; i <= max; i += step) {
        console.log(i);
    }
}


// takes in an a positive integer, returns an array of all factors of the integer
let factorsOf = function(num) {
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
let fizzBuzz = function(max) {
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
