import { tests } from "./tests.js";
class Calculator {
    constructor() {
        this.setDisplayableButtons(this.numberButtons);
        this.setOperationButtons(this.operationButtons);
    }
    numberButtons = this.getButtons(".numbers");
    operationButtons = this.getButtons(".operations");
    displayElement = document.querySelector(".display .text-output");
    operationDefinitions = {
        "+": function (num1, num2) {
            return +num1 + +num2;
        },
        "-": function (num1, num2) {
            return +num1 - +num2;
        },
        "*": function (num1, num2) {
            return +num1 * +num2;
        },
        "/": function (num1, num2) {
            if (+num2 === 0) {
                return "Error";
            }
            return +num1 / +num2;
        },
    };
    savedInput = [];
    cleanDisplayOnNextNumberInput = false;
    justEnteredAnOperator = false;
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
                this.justEnteredAnOperator = false;
                if (this.cleanDisplayOnNextNumberInput) {
                    this.displayElement.textContent = "";
                    this.cleanDisplayOnNextNumberInput = false;
                }
                this.displayElement.textContent += button.textContent;
            });
        });
    }
    setOperationButtons(buttons) {
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                this.cleanDisplayOnNextNumberInput = true;
                // IF (
                    // display content !== 'Error' && 
                    // display content !== '' &&
                    // display content not more then one '.'
                    // )
                    // case: 0 length array
                        // IF (operator !== '=')
                            // Add display-content and operator to array
                            // set this.justEnteredAnOperator = true
                    // case: 2 length array
                        // IF (
                            // this.justEnteredAnOperator === true &&
                            // operator !== '='
                            // )
                            // replace last operator in Array with new one
                        // IF (this.justEnteredAnOperator === false)
                            // Add display-content to array
                            // run operation of first 3 elements (should never be more then 3)
                            // overwrite display with result
                            // clean array
                            // IF (operator !== '=')
                                // Add display-content and operator to array
                                // set this.justEnteredAnOperator = true

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
