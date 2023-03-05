import AbstractCommand from './AbstractCommand';

export default class AnyPowerCommand extends AbstractCommand {
    execute() {
        return `${this.firstValue ** this.secondValue}`;
    }

    static needSecondValue() {
        return true;
    }
}
