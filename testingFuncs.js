let dogs = ['belka', 'strelka', 'laika', 'dezik'];
for (let i = 0; i < dogs.length; i++) {
    let dog1 = dogs[i];
    for (let j = i + 1; j < dogs.length; j++) {
        let dog2 = dogs[j];
        console.log(dog1, dog2);
    }
}


testArr.forEach(function(value, i) {
    console.log(value + ", index of: " + i);
})



let newValues = values.map(function(value, i) {
    return("VALUE: " + value.toUpperCase());
})
console.log(newValues);



let yValues = values.filter(function(value) {
    return value.length > 7;
})
console.log(yValues);



let sum = nums.reduce(function(accum, el) {
    return accum * el;
})
console.log(sum);



let largeCheck = nums.reduce(function(accum, el) {
    if (el > accum) {
        return el;
    } else {
        return accum;
    }
})
console.log(largeCheck);



let average = function(num1, num2) {
    let avg = (num1 + num2) / 2;
    return avg;
}

let averageArrow = (num1, num2) => {
    let avg = (num1 + num2) / 2
    return avg;
}

let yoink = string => {
    let yoinked = string + "yoink!";
    return yoinked;
}

let nun = () => {
    console.log();
}

/* can use fat arrow for single functions with no need to return */
