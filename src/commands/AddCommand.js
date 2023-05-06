import calculateSum from '../utils/calculate-functions/calculateSum';
import AbstractCommand from './AbstractCommand';

export default class AddCommand extends AbstractCommand {
    execute() {
        return `${calculateSum(this.firstValue, this.secondValue)}`;
    }

    static needSecondValue() {
        return true;
    }
}
