/*
Calculate the sum of numbers within an array
*/

const sumOfArray = (arr) => {
    const sum = arr.reduce((num1, num2) => {
        return num1 + num2
    }, 0)
    return sum
}

module.exports = {
    sumOfArray
}