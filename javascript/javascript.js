import { tests } from "./tests.js";
class Calculator {
    allButtons = this.getButtons(".buttons");
    numberButtons = this.getButtons(".numbers");
    displayElement = document.querySelector(".display .text-output");
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
    getButtons(cssParentClass) {
        const buttons = [];
        getLeafElements(document.querySelectorAll(cssParentClass), buttons);
        return buttons;
    }
    operate(operation) {
        const num1 = operation[0];
        const num2 = operation[2];
        const operator = operation[1];

        return this.operationDefinitions[operator](num1, num2);
    }
    displayNumberButtons(enteredDigit) {
        this.displayElement.textContent += enteredDigit;
    }
}
function getLeafElements(elements, leafElementContainer) {
    Array(...elements).forEach((element) => {
        if (element.children.length !== 0) {
            getLeafElements(element.children, leafElementContainer);
        } else {
            leafElementContainer.push(element);
        }
    });
}
const calculator = new Calculator();
console.log(calculator.allButtons);
console.log(calculator);
tests();
