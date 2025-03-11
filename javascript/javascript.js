import { tests } from "./tests.js";
class Calculator {
    operationDefinitions = {
        "+": function (num1, num2) {
            return num1 + num2;
        },
        "-": function (num1, num2) {
            return num1 - num2;
        },
        "*": function (num1, num2) {
            return num1 * num2;
        },
        "/": function (num1, num2) {
            return num1 / num2;
        },
    };
    operate(operation) {
        const num1 = operation[0];
        const num2 = operation[2];
        const operator = operation[1];

        return this.operationDefinitions[operator](num1, num2);
    }
    display(calculationOutput) {
        
    }
}
const calculator = new Calculator();
const displayElement = document.querySelector(".display .text-output");

console.log(calculator.operate([1, "+", 1]));
tests();
