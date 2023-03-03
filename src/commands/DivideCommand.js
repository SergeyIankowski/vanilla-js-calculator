import AbstractCommand from './AbstractCommand';

export default class DivideCommand extends AbstractCommand {
    execute(stringValue) {
        const value = +stringValue;
        return `${value ? value / this.secondValue : value}`;
    }

    undo(stringValue) {
        const value = +stringValue;
        return value * this.secondValue;
    }
}
