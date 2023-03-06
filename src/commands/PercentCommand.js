import AbstractCommand from './AbstractCommand';

export default class PercentCommand extends AbstractCommand {
    execute() {
        return `${this.firstValue / 100}`;
    }

    static needSecondValue() {
        return false;
    }
}
