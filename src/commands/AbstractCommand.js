export default class AbstractCommand {
    constructor(stringFirstValue, stringSecondValue) {
        this.firstValue = Number(stringFirstValue);
        this.secondValue = Number(stringSecondValue);
    }

    execute() {
        throw new Error(`this is abstract class${this}, method 'execute()' must be implemented`);
    }

    undo() {
        return this.firstValue;
    }

    needSecondValue() {
        throw new Error(
            `this is abstract class${this}, method 'needSecondValue()' must be implemented`
        );
    }
}
