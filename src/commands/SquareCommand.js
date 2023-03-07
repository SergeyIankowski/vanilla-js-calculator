import calculatePowerOfNumber from '../utils/calculate-functions/calculatePowerOfNumber';
import AbstractCommand from './AbstractCommand';

export default class SquareCommand extends AbstractCommand {
    execute() {
        return `${calculatePowerOfNumber(this.firstValue, 2)}`;
    }

    static needSecondValue() {
        return false;
    }
}
