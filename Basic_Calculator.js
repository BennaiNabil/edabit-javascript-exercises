/*
Basic Calculator
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4
calculator(2, "*", 2) ➞ 4
calculator(4, "/", 2) ➞ 2

Notes
If the input tries to divide by 0, return: "Can't divide by 0!"

*/

function calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Can't divide by 0!";
            }
        default:
            break;
    }
}
