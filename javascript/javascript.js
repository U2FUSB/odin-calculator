import { tests } from "./tests.js";
class Calculator {
    constructor() {
        this.setDisplayableButtons(this.numberButtons);
        this.setOperationButtons(this.operationButtons);
    }
    allButtons = this.getButtons(".buttons");
    numberButtons = this.getButtons(".numbers");
    operationButtons = this.getButtons(".operations");
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
    lastDisplayedInput = [];
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
    setDisplayableButtons(buttons) {
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                this.displayElement.textContent += button.textContent;
            });
        });
    }
    setOperationButtons(buttons) {
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                this.lastDisplayedInput.push(this.displayElement.textContent);
                this.lastDisplayedInput.push(button.textContent)
                this.displayElement.textContent = "";
            });
        });
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

console.groupCollapsed("Calculator contents");
console.log(calculator.allButtons);
console.log(calculator);
console.groupEnd();

tests();
