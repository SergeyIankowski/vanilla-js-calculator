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
    AnyPowerCommand,
    MemoryAddCommand,
    MemoryRecallCommand,
    MemorySubstractCommand,
    MemoryClearCommand,
} from './commands';
import buttonsNames from './models/buttonsNames';
import numberKeys from './models/numberKeys';
import operatorsStrings from './models/operatorsStrings';
import addClickCallbackToNode from './utils/addCallbackToNode';
import getNamesArrFromValues from './utils/getNamesArrFromValues';

export default class App {
    constructor(calculator, createUINodeCallback) {
        this.calculator = calculator;
        this.UINode = createUINodeCallback();

        this.firstValue = null;
        this.command = null;
        this.secondValue = null;
    }

    createUI(targetNode) {
        const setBtnSelector = (str) => `.calculator__button_${str}`;
        const buttonsDigitsNamesArr = getNamesArrFromValues(buttonsNames, numberKeys);
        buttonsDigitsNamesArr.forEach((digName, index) => {
            addClickCallbackToNode(this.UINode, setBtnSelector(digName), () => {
                this.addValue(index);
                this.reRenderBoard();
            });
        });

        const memoryAdd = setBtnSelector('memoryAdd');
        addClickCallbackToNode(this.UINode, memoryAdd, () => {
            this.addCommand(MemoryAddCommand);
            this.calculate();
            this.reRenderBoard();
        });

        const memoryClear = setBtnSelector('memoryClear');
        addClickCallbackToNode(this.UINode, memoryClear, () => {
            this.addCommand(MemoryClearCommand);
            this.calculate();
            this.reRenderBoard();
        });

        const memorySubstract = setBtnSelector('memorySubstract');
        addClickCallbackToNode(this.UINode, memorySubstract, () => {
            this.addCommand(MemorySubstractCommand);
            this.calculate();
            this.reRenderBoard();
        });

        const memoryRecall = setBtnSelector('memoryRecall');
        addClickCallbackToNode(this.UINode, memoryRecall, () => {
            this.addCommand(MemoryRecallCommand);
            this.calculate();
            this.reRenderBoard();
        });

        const AC = setBtnSelector('allClean');
        addClickCallbackToNode(this.UINode, AC, () => {
            this.clean();
            this.calculator.history = [];
            this.reRenderBoard();
        });
        const returnPrevCalc = setBtnSelector('returnToPrevResult');
        addClickCallbackToNode(this.UINode, returnPrevCalc, () => {
            this.calculator.undo();
            this.refreshAppValues();
            this.reRenderBoard();
        });

        const equal = setBtnSelector('equal');
        addClickCallbackToNode(this.UINode, equal, () => {
            this.calculate();
        });

        const dot = setBtnSelector('dot');
        addClickCallbackToNode(this.UINode, dot, () => {
            this.pastDotToValue();
            this.reRenderBoard();
        });

        const changeSign = setBtnSelector('changeSign');
        addClickCallbackToNode(this.UINode, changeSign, () => {
            this.changeSign();
            this.reRenderBoard();
        });

        const plus = setBtnSelector('plus');
        addClickCallbackToNode(this.UINode, plus, () => this.addCommand(AddCommand));

        const minus = setBtnSelector('minus');
        addClickCallbackToNode(this.UINode, minus, () => this.addCommand(SubstractCommand));

        const multiply = setBtnSelector('multiply');
        addClickCallbackToNode(this.UINode, multiply, () => this.addCommand(MultiplyCommand));

        const divide = setBtnSelector('divide');
        addClickCallbackToNode(this.UINode, divide, () => this.addCommand(DivideCommand));

        const percent = setBtnSelector('percent');
        addClickCallbackToNode(this.UINode, percent, () => {
            this.addCommand(PercentCommand);
            this.calculate();
        });

        const square = setBtnSelector('square');
        addClickCallbackToNode(this.UINode, square, () => {
            this.addCommand(SquareCommand);
            this.calculate();
        });
        const cube = setBtnSelector('cube');
        addClickCallbackToNode(this.UINode, cube, () => {
            this.addCommand(CubeCommand);
            this.calculate();
        });
        const numberPower = setBtnSelector('numberPower');
        addClickCallbackToNode(this.UINode, numberPower, () => {
            this.addCommand(AnyPowerCommand);
            this.calculate();
        });
        const tenPower = setBtnSelector('tenPower');
        addClickCallbackToNode(this.UINode, tenPower, () => {
            this.addCommand(TenPowerCommand);
            this.calculate();
        });
        const reverse = setBtnSelector('reverse');
        addClickCallbackToNode(this.UINode, reverse, () => {
            this.addCommand(ReverseNumberCommand);
            this.calculate();
        });
        const squareRoot = setBtnSelector('squareRoot');
        addClickCallbackToNode(this.UINode, squareRoot, () => {
            this.addCommand(SquareRootCommand);
            this.calculate();
        });
        const cubeRoot = setBtnSelector('cubeRoot');
        addClickCallbackToNode(this.UINode, cubeRoot, () => {
            this.addCommand(CubeRootCommand);
            this.calculate();
        });
        const powerRoot = setBtnSelector('powerRoot');
        addClickCallbackToNode(this.UINode, powerRoot, () => {
            this.addCommand(PowerRootCommand);
        });
        const factorial = setBtnSelector('factorial');
        addClickCallbackToNode(this.UINode, factorial, () => {
            this.addCommand(FactorialCommand);
            this.calculate();
        });

        targetNode.append(this.UINode);
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
        this.reRenderBoard();
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
        } else if (!`${this.firstValue}`.includes('.')) {
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
        const activeValue = this.UINode.querySelector('.show-board__active-value');
        const notActiveValue = this.UINode.querySelector('.show-board__not-active-value');
        const operator = this.UINode.querySelector('.show-board__operator');

        if (!this.firstValue && !this.operator && !this.secondValue) {
            activeValue.innerText = '';
            operator.innerText = '';
            notActiveValue.innerText = '';
            return;
        }
        if (this.firstValue && !this.command && !this.secondValue) {
            activeValue.innerText = this.firstValue;
            operator.innerText = '';
            notActiveValue.innerText = '';
            return;
        }
        if (this.firstValue && this.command) {
            activeValue.innerText = this.secondValue ? this.secondValue : '';
            notActiveValue.innerText = this.firstValue;
            operator.innerText = operatorsStrings.get(this.command);
        }
    }
}
