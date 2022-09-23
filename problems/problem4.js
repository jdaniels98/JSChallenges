/*
If num1 is larger than num2, divide num1 by num2,
else, multiply num1 and num2
*/

const checkDivide = (num1, num2) => {
    return num1 > num2 ? num1 / num2 : num1 * num2
}


module.exports = {
    checkDivide
}