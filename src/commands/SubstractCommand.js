import calculateSubstraction from '../utils/calculate-functions/calculateSubstraction'

import AbstractCommand from './AbstractCommand'

export default class SubstractCommand extends AbstractCommand {
    execute() {
        return `${calculateSubstraction(this.firstValue, this.secondValue)}`
    }

    static needSecondValue() {
        return true
    }
}
