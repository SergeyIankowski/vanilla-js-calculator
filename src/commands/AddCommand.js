import AbstractCommand from './AbstractCommand';

export default class AddCommand extends AbstractCommand {
    execute(stringValue) {
        const value = +stringValue;
        return `${value ? value + this.secondValue : value}`;
    }

    undo(stringValue) {
        const value = +stringValue;
        return value - this.secondValue;
    }
}
