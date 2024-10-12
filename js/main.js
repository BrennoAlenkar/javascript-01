const numbers = [1, 2, 3, 4, 5];

const total = myReduce(numbers, (accumulator, value) => {
    console.log(accumulator);
    console.log(' ');
    return accumulator + value;
}, 0);

function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

console.log(total);