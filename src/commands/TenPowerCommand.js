import calculatePowerOfNumber from '../utils/calculate-functions/calculatePowerOfNumber';
import AbstractCommand from './AbstractCommand';

export default class TenPowerCommand extends AbstractCommand {
    execute() {
        return `${calculatePowerOfNumber(10, this.firstValue)}`;
    }

    static needSecondValue() {
        return false;
    }
}
