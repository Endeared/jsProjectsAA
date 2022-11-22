function wordWithinArray(array, word) {
    // your code here...

    if (array.indexOf(word) !== -1) {
        return true;
    } else {
        return false;
    }
};

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
