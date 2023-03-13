import calculatePowerOfNumber from '../utils/calculate-functions/calculatePowerOfNumber';
import AbstractCommand from './AbstractCommand';

export default class AnyPowerCommand extends AbstractCommand {
    execute() {
        return `${calculatePowerOfNumber(this.firstValue, this.secondValue)}`;
    }

    static needSecondValue() {
        return true;
    }
}
