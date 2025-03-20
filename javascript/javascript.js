class Calculator {
    constructor() {
        this.setDisplayableButtons(this.numberButtons);
        this.setSpecialActionButtons(this.specialActionButtons);
        this.setOperationButtons(this.operationButtons);
        this.setKeyboardKeys();
    }
    allButtons = this.getButtonsFromCss(".buttons");
    numberButtons = this.getButtonsFromCss(".numbers");
    specialActionButtons = this.getButtonsFromCss(".special-actions");
    operationButtons = this.getButtonsFromCss(".operations");
    displayElement = document.querySelector(".display .text-output");
    operationDefinitions = {
        "+": function (num1, num2) {
            return +num1 + +num2;
        },
        "-": function (num1, num2) {
            return +num1 - +num2;
        },
        "*": function (num1, num2) {
            return (+num1 * +num2).toFixed(2);
        },
        "/": function (num1, num2) {
            if (+num2 === 0) {
                return "Error";
            }
            return (+num1 / +num2).toFixed(2);
        },
    };
    savedInput = [];
    cleanDisplayOnNextNumberInput = false;
    justEnteredAnOperator = false;
    getButtonsFromCss(cssParentClass) {
        function getLeafElements(elements, leafElementContainer) {
            Array(...elements).forEach((element) => {
                if (element.children.length !== 0) {
                    getLeafElements(element.children, leafElementContainer);
                } else {
                    leafElementContainer.push(element);
                }
            });
        }
        const buttons = [];
        getLeafElements(document.querySelectorAll(cssParentClass), buttons);
        return buttons;
    }
    getButtonForKeytext(keytext) {
        return this.allButtons.find((button) => button.textContent === keytext);
    }
    operate(operation) {
        const num1 = operation[0];
        const num2 = operation[2];
        const operator = operation[1];

        return this.operationDefinitions[operator](num1, num2).toString();
    }
    handleNumberInput(button) {
        this.justEnteredAnOperator = false;
        if (this.cleanDisplayOnNextNumberInput) {
            this.displayElement.textContent = "";
            this.cleanDisplayOnNextNumberInput = false;
        }
        if (
            !(
                this.displayElement.textContent.includes(".") &&
                button.textContent === "."
            )
        ) {
            this.displayElement.textContent += button.textContent;
        }
    }
    handleSpecialActionInput(button) {
        switch (button.textContent) {
            case "C":
                this.displayElement.textContent = "";
                this.savedInput.splice(0);
                this.cleanDisplayOnNextNumberInput = false;
                this.justEnteredAnOperator = false;
                break;
            case "DEL":
                this.displayElement.textContent =
                    this.displayElement.textContent.substring(
                        0,
                        this.displayElement.textContent.length - 1
                    );
                break;
            case "+/-":
                this.displayElement.textContent *= -1;
                break;
            default:
                break;
        }
    }
    handleOperationInput(button) {
        this.cleanDisplayOnNextNumberInput = true;
        if (
            this.displayElement.textContent !== "Error" &&
            this.displayElement.textContent !== "" &&
            this.displayElement.textContent !== "." &&
            this.displayElement.textContent.split(".").length - 1 <= 1
        ) {
            switch (this.savedInput.length) {
                case 0:
                    if (button.textContent !== "=") {
                        this.savedInput.push(
                            this.displayElement.textContent,
                            button.textContent
                        );
                        this.justEnteredAnOperator = true;
                    }
                    break;
                case 2:
                    if (
                        this.justEnteredAnOperator === true &&
                        button.textContent !== "="
                    ) {
                        this.savedInput[this.savedInput.length - 1] =
                            button.textContent;
                    }
                    if (this.justEnteredAnOperator === false) {
                        this.savedInput.push(this.displayElement.textContent);
                        const [num1, operator, num2] = this.savedInput;
                        const operation = [num1, operator, num2];
                        const operationResult = this.operate(operation);
                        this.displayElement.textContent = operationResult;
                        this.savedInput.splice(0);
                        if (button.textContent !== "=") {
                            this.savedInput.push(
                                this.displayElement.textContent,
                                button.textContent
                            );
                            this.justEnteredAnOperator === true;
                        }
                    }
                    break;
                default:
                    this.displayElement.textContent = "Error";
                    break;
            }
        }
    }
    handleKeyboardInput(key) {
        console.log(key.key);
        const isNumberButton = this.numberButtons.some(
            (button) => button.textContent === key.key
        );
        const isOperationButton = this.operationButtons.some(
            (button) => button.textContent === key.key
        );
        if (isNumberButton) {
            this.handleNumberInput(this.getButtonForKeytext(key.key));
        }
        if (isOperationButton) {
            this.handleOperationInput(this.getButtonForKeytext(key.key));
        }
        switch (key.key) {
            case "Enter":
                this.handleOperationInput(this.getButtonForKeytext("="));
                break;
            case ",":
                this.handleNumberInput(this.getButtonForKeytext("."));
                break;
            case "o":
                this.handleNumberInput(this.getButtonForKeytext("00"));
                break;
            case "C":
            case "Delete":
            case "Escape":
                this.handleSpecialActionInput(this.getButtonForKeytext("C"));
                break;
            case "Backspace":
                this.handleSpecialActionInput(this.getButtonForKeytext("DEL"));
                break;
            case "_":
            case "°":
                this.handleSpecialActionInput(this.getButtonForKeytext("+/-"));
                break;
        }
    }
    setDisplayableButtons(buttons) {
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                this.handleNumberInput(button);
            });
        });
    }
    setSpecialActionButtons(buttons) {
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                this.handleSpecialActionInput(button);
            });
        });
    }
    setOperationButtons(buttons) {
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                this.handleOperationInput(button);
            });
        });
    }
    setKeyboardKeys() {
        document.addEventListener("keydown", (key) => {
            this.handleKeyboardInput(key);
        });
    }
}

const calculator = new Calculator();
const { allButtons, numberButtons, specialActionButtons, operationButtons } =
    calculator;

console.groupCollapsed("Calculator contents");
console.table(Object.getOwnPropertyDescriptors(calculator));
console.group("all");
console.table([allButtons]);
console.groupEnd();
console.group("numbers");
console.table([numberButtons]);
console.groupEnd();
console.group("special actoins");
console.table([specialActionButtons]);
console.groupEnd();
console.group("operations");
console.table([operationButtons]);
console.groupEnd();
console.groupEnd();
