import AbstractCommand from './AbstractCommand';

export default class SquareCommand extends AbstractCommand {
    execute() {
        return `${this.firstValue ** 2}`;
    }

    static needSecondValue() {
        return false;
    }
}
