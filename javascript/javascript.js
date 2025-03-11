import { tests } from "./tests.js";
class Calculator {
    displayElement = document.querySelector(".display .text-output");
    buttons = [];
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
    getButtons() {getLeafElements(document.querySelectorAll(".buttons"),this.buttons)}
    operate(operation) {
        const num1 = operation[0];
        const num2 = operation[2];
        const operator = operation[1];

        return this.operationDefinitions[operator](num1, num2);
    }
    display(enteredDigit) {
        this.displayElement.textContent += enteredDigit;
        // this.displayElement.child
    }
}
function getLeafElements(elements,buttons) {
    Array(...elements).forEach((element) => {
        if (element.children.length !== 0) {
            getLeafElements(element.children, buttons);
        } else {
            buttons.push(element);
        }
    });
}
const calculator = new Calculator();
calculator.getButtons()
console.log(calculator.buttons);
tests();
