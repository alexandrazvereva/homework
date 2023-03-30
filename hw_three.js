function arrayMultiply(arr) {

    for (i = 0; i < arr.length; i++) {
        arr[i] *= 3
    }
    return arr;
}

console.log(arrayMultiply([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(arrayMultiply([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
console.log(arrayMultiply([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]));
console.log(arrayMultiply([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]));
console.log(arrayMultiply([345643, 454, 76543, 3456, 12343, 876, 4324, 4356575, 21, 113, 3435, 6543, 654, 99776, 222, 43, 567, 1, 34]));
