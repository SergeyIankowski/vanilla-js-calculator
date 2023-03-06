import calculateDivision from '../utils/calculate-functions/calculateDivision';
import AbstractCommand from './AbstractCommand';

export default class PercentCommand extends AbstractCommand {
    execute() {
        return `${calculateDivision(this.firstValue, 100)}`;
    }

    static needSecondValue() {
        return false;
    }
}
