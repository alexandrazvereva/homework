let newArr;
function findEvenNumbers(arr) {

    for (let i = 0; i < arr.length; i++) { newArr = arr.filter(i => i % 2 === 0) }
    return newArr;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findEvenNumbers([22, 33, 44, 6543, 76542, 456, 84, 23, 87, 3456, 9, 654, 1, 34567, 23456, 7654323, 876567, 45678]));
console.log(findEvenNumbers([6756, 4567, 65432, 4567, 8765, 976, 5678, 98765456, 98765, 4567, 9876543]));
console.log(findEvenNumbers([2345, 9876, 3456, 654, 3456, 1234, 7654, 4574, 246456, 74678, 987654]));
console.log(findEvenNumbers([345643, 454, 76543, 3456, 12343, 876, 4324, 4356575, 21, 113, 3435, 6543, 654, 99776, 222, 43, 567, 1, 34]));

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let newArr = arr.filter(i => i % 2 === 0)
//console.log(newArr)