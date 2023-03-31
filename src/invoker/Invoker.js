export default class Invoker {
    constructor(calculator) {
        this.calculator = calculator;

        this.firstValue = null;
        this.command = null;
        this.secondValue = null;
    }

    addValue(value) {
        const strValue = `${value}`;
        if (this.firstValue === '0') {
            this.firstValue = '';
        }
        if (this.command && this.firstValue) {
            this.secondValue = this.secondValue ? `${this.secondValue}${strValue}` : strValue;
            return;
        }
        this.firstValue = this.firstValue ? `${this.firstValue}${strValue}` : strValue;
    }

    addCommand(command) {
        if (this.command && this.secondValue) this.calculate();
        this.command = command;
    }

    calculate() {
        const Command = this.command;

        if (!this.command) return;
        if (this.command.needSecondValue() && this.secondValue) {
            this.calculator.executeCommand(new Command(this.firstValue, this.secondValue));
            this.refreshAppValues();
            return;
        }
        if (!this.command.needSecondValue()) {
            this.calculator.executeCommand(new Command(this.firstValue));
            this.refreshAppValues();
        }
    }

    clean() {
        this.firstValue = null;
        this.command = null;
        this.secondValue = null;
    }

    pastDotToValue() {
        if (this.secondValue && !this.secondValue.toString().includes('.')) {
            this.secondValue += '.';
            return;
        }
        if (!this.firstValue.toString().includes('.')) {
            this.firstValue += '.';
        }
    }

    changeSign() {
        if (this.secondValue) {
            this.secondValue *= -1;
        } else {
            this.firstValue *= -1;
        }
    }

    refreshAppValues() {
        this.firstValue = this.calculator.value;
        this.command = null;
        this.secondValue = null;
    }
}
