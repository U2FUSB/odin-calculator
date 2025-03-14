import { tests } from "./tests.js";
class Calculator {
    allButtons = this.getButtons([]);
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
    getButtons(buttons) {
        getLeafElements(document.querySelectorAll(".buttons"), buttons);
        return buttons;
    }
    operate(operation) {
        const num1 = operation[0];
        const num2 = operation[2];
        const operator = operation[1];

        return this.operationDefinitions[operator](num1, num2);
    }
    display(enteredDigit) {
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
console.log(calculator)
tests();
