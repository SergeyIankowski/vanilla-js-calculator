export default class App {
    constructor(calculator, UINode) {
        this.calculator = calculator;
        this.UINode = UINode;

        this.firstValue = null;
        this.command = null;
        this.secondValue = null;
    }

    createUI() {}

    addValue(value) {
        if (this.command) {
            this.secondValue = this.secondValue ? `${this.secondValue}${value}` : value;
            return;
        }
        this.firstValue = this.firstValue ? `${this.firstValue}${value}` : value;
    }

    calculate() {
        const Command = this.command;
        this.calculator.value = this.firstValue;
        this.calculator.executeCommand(new Command(this.secondValue));
        this.refreshAppValues();
    }

    refreshAppValues() {
        this.firstValue = this.calculator.value;
        this.command = null;
        this.secondValue = null;
    }
}
