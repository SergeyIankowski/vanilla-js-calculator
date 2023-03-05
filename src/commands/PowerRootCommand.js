import calculatePowerRoot from '../utils/calculatePowerRoot';
import AbstractCommand from './AbstractCommand';

export default class PowerRootCommand extends AbstractCommand {
    execute() {
        return `${calculatePowerRoot(this.firstValue, this.secondValue)}`;
    }

    static needSecondValue() {
        return true;
    }
}
