export default class AbstractCommand {
    constructor(stringValue) {
        this.secondValue = +stringValue;
    }

    execute() {
        throw new Error(`this is abstract class${this}, method 'execute()' must be implemented`);
    }

    undo() {
        throw new Error(`this is abstract class${this}, method 'undo()' must be implemented`);
    }
}
