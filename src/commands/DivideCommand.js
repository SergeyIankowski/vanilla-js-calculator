import calculateDivision from '../utils/calculate-functions/calculateDivision'

import AbstractCommand from './AbstractCommand'

export default class DivideCommand extends AbstractCommand {
    execute() {
        const result = calculateDivision(this.firstValue, this.secondValue)
        return Number.isFinite(result) ? `${result}` : 'Not divisible by zero'
    }

    static needSecondValue() {
        return true
    }
}
