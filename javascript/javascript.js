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
    savedInput = [];
    getButtons(cssParentClass) {
        const buttons = [];
        getLeafElements(document.querySelectorAll(cssParentClass), buttons);
        return buttons;
    }
    operate(operation) {
        const num1 = Number(operation[0]);
        const num2 = Number(operation[2]);
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
                this.savedInput.push(this.displayElement.textContent);
                this.savedInput.push(button.textContent);
                this.displayElement.textContent = "";
                console.log(this.savedInput);
                if (this.savedInput.length === 4) {
                    const [num1, operator, num2] = this.savedInput;
                    const operationResult = this.operate([
                        num1,
                        operator,
                        num2,
                    ]).toString();
                    this.displayElement.textContent = operationResult;
                    if (button.textContent === "=") {
                        this.savedInput.splice(0);
                    } else {
                        this.savedInput.splice(0,3);
                        this.savedInput.unshift(operationResult);
                        this.displayElement.textContent = "";
                    }
                }
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
const { allButtons, numberButtons, operationButtons } = calculator;
console.groupCollapsed("Calculator contents");
console.table(Object.getOwnPropertyDescriptors(calculator));
console.group("numbers");
console.table([numberButtons]);
console.groupEnd();
console.group("operations");
console.table([operationButtons]);
console.groupEnd();
console.groupEnd();

tests();
