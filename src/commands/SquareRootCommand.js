import AbstractCommand from './AbstractCommand';

export default class SquareRootCommand extends AbstractCommand {
    execute() {
        return `${this.firstValue ** 0.5}`;
    }

    static needSecondValue() {
        return false;
    }
}
