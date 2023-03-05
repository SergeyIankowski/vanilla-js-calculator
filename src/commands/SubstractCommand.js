import AbstractCommand from './AbstractCommand';

export default class SubstractCommand extends AbstractCommand {
    execute() {
        return `${this.firstValue - this.secondValue}`;
    }

    static needSecondValue() {
        return true;
    }
}
