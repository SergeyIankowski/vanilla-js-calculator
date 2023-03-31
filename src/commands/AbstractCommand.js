export default class AbstractCommand {
    constructor(stringFirstValue, stringSecondValue) {
        this.firstValue = parseInt(stringFirstValue, 10);
        this.secondValue = parseInt(stringSecondValue, 10);
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
