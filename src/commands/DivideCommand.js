import calculateDivision from '../utils/calculate-functions/calculateDivision';
import AbstractCommand from './AbstractCommand';

export default class DivideCommand extends AbstractCommand {
    execute() {
        return `${calculateDivision(this.firstValue, this.secondValue)}`;
    }

    static needSecondValue() {
        return true;
    }
}
