import {
    AddCommand,
    CubeCommand,
    CubeRootCommand,
    DivideCommand,
    FactorialCommand,
    MultiplyCommand,
    PercentCommand,
    PowerRootCommand,
    ReverseNumberCommand,
    SquareCommand,
    SquareRootCommand,
    SubstractCommand,
    TenPowerCommand,
} from './commands';
import AnyPowerCommand from './commands/AnyPowerCommand';
import buttonsNames from './models/buttonsNames';
import numberKeys from './models/numberKeys';
import addClickCallbackToNode from './utils/addCallbackToNode';
import getNameFromValue from './utils/getNameFromValue';
import getNamesArrFromValues from './utils/getNamesArrFromValues';

export default class App {
    constructor(calculator, createUINodeCallback) {
        this.calculator = calculator;
        this.UINode = createUINodeCallback();

        this.firstValue = null;
        this.command = null;
        this.secondValue = null;
    }

    createUI() {
        const setBtnSelector = (str) => `.calculator__button_${str}`;
        const buttonsDigitsNamesArr = getNamesArrFromValues(buttonsNames, numberKeys);
        buttonsDigitsNamesArr.forEach((digName, index) => {
            addClickCallbackToNode(this.UINode, setBtnSelector(digName), () => {
                this.addValue(index);
                this.reRenderBoard();
            });
        });

        const AC = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.allClean));
        addClickCallbackToNode(this.UINode, AC, () => {
            this.clean();
            this.reRenderBoard();
        });

        const equal = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.equal));
        addClickCallbackToNode(this.UINode, equal, () => this.calculate());

        const dot = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.dot));
        addClickCallbackToNode(this.UINode, dot, () => {
            this.pastDotToValue();
            this.reRenderBoard();
        });

        const changeSign = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.changeSign));
        addClickCallbackToNode(this.UINode, changeSign, () => {
            this.changeSign();
            this.reRenderBoard();
        });

        const plus = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.plus));
        addClickCallbackToNode(this.UINode, plus, () => this.addCommand(AddCommand));

        const minus = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.minus));
        addClickCallbackToNode(this.UINode, minus, () => this.addCommand(SubstractCommand));

        const multiply = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.multiply));
        addClickCallbackToNode(this.UINode, multiply, () => this.addCommand(MultiplyCommand));

        const divide = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.divide));
        addClickCallbackToNode(this.UINode, divide, () => this.addCommand(DivideCommand));

        const percent = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.percent));
        addClickCallbackToNode(this.UINode, percent, () => {
            this.addCommand(PercentCommand);
            this.calculate();
        });

        const square = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.square));
        addClickCallbackToNode(this.UINode, square, () => {
            this.addCommand(SquareCommand);
            this.calculate();
        });
        const cube = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.cube));
        addClickCallbackToNode(this.UINode, cube, () => {
            this.addCommand(CubeCommand);
            this.calculate();
        });
        const numberPower = setBtnSelector(
            getNameFromValue(buttonsNames, buttonsNames.numberPower)
        );
        addClickCallbackToNode(this.UINode, numberPower, () => {
            this.addCommand(AnyPowerCommand);
        });
        const tenPower = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.tenPower));
        addClickCallbackToNode(this.UINode, tenPower, () => {
            this.addCommand(TenPowerCommand);
        });
        const reverse = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.reverse));
        addClickCallbackToNode(this.UINode, reverse, () => {
            this.addCommand(ReverseNumberCommand);
            this.calculate();
        });
        const squareRoot = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.squareRoot));
        addClickCallbackToNode(this.UINode, squareRoot, () => {
            this.addCommand(SquareRootCommand);
            this.calculate();
        });
        const cubeRoot = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.cubeRoot));
        addClickCallbackToNode(this.UINode, cubeRoot, () => {
            this.addCommand(CubeRootCommand);
            this.calculate();
        });
        const powerRoot = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.powerRoot));
        addClickCallbackToNode(this.UINode, powerRoot, () => {
            this.addCommand(PowerRootCommand);
        });
        const factorial = setBtnSelector(getNameFromValue(buttonsNames, buttonsNames.factorial));
        addClickCallbackToNode(this.UINode, factorial, () => {
            this.addCommand(FactorialCommand);
            this.calculate();
        });

        document.body.append(this.UINode);
    }

    addValue(value) {
        const strValue = `${value}`;
        if (this.command) {
            this.secondValue = this.secondValue ? `${this.secondValue}${strValue}` : strValue;
            return;
        }
        this.firstValue = this.firstValue ? `${this.firstValue}${strValue}` : strValue;
    }

    addCommand(command) {
        if (this.command) this.calculate();
        this.command = command;
    }

    calculate() {
        const Command = this.command;

        if (!this.command) return;
        if (this.command.needSecondValue() && this.secondValue) {
            this.calculator.executeCommand(new Command(this.firstValue, this.secondValue));
            this.refreshAppValues();
        } else if (!this.command.needSecondValue()) {
            this.calculator.executeCommand(new Command(this.firstValue));
            this.refreshAppValues();
        }
        this.reRenderBoard();
    }

    clean() {
        this.firstValue = null;
        this.command = null;
        this.secondValue = null;
    }

    pastDotToValue() {
        if (this.secondValue && !`${this.secondValue}`.includes('.')) {
            this.secondValue += '.';
        }
        if (!`${this.firstValue}`.includes('.')) {
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

    reRenderBoard() {
        const board = this.UINode.querySelector('.show-board');
        if (!this.firstValue) {
            board.innerText = '';
            return;
        }
        board.innerText = this.secondValue ? this.secondValue : this.firstValue;
    }
}
