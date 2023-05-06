import reverseValue from '../utils/calculate-functions/reverseValue';
import AbstractCommand from './AbstractCommand';

export default class ReverseNumberCommand extends AbstractCommand {
    execute() {
        return `${reverseValue(this.firstValue)}`;
    }

    static needSecondValue() {
        return false;
    }
}
