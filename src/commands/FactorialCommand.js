import calculateFactorial from '../utils/calculate-functions/calculateFactorial';
import AbstractCommand from './AbstractCommand';

export default class FactorialCommand extends AbstractCommand {
    execute() {
        if (!Number.isInteger(this.firstValue)) {
            return 'Only integer';
        }
        return `${calculateFactorial(this.firstValue)}`;
    }

    static needSecondValue() {
        return false;
    }
}
