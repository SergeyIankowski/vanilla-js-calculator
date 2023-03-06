import calculatePowerOfNumber from '../utils/calculate-functions/calculatePowerOfNumber';
import AbstractCommand from './AbstractCommand';

export default class CubeCommand extends AbstractCommand {
    execute() {
        return `${calculatePowerOfNumber(this.firstValue, 3)}`;
    }

    static needSecondValue() {
        return false;
    }
}
