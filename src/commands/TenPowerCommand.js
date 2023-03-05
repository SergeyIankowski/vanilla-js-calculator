import AbstractCommand from './AbstractCommand';

export default class TenPowerCommand extends AbstractCommand {
    execute() {
        return `${10 ** this.firstValue}`;
    }

    static needSecondValue() {
        return false;
    }
}
