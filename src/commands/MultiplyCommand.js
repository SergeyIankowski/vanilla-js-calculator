import calculateMultiplying from '../utils/calculate-functions/calculateMultiplying';
import AbstractCommand from './AbstractCommand';

export default class MultiplyCommand extends AbstractCommand {
    execute() {
        return `${calculateMultiplying(this.firstValue, this.secondValue)}`;
    }

    static needSecondValue() {
        return true;
    }
}
