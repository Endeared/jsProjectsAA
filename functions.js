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
