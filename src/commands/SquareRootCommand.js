import calculatePowerRoot from '../utils/calculate-functions/calculatePowerRoot'

import AbstractCommand from './AbstractCommand'

export default class SquareRootCommand extends AbstractCommand {
    execute() {
        return `${calculatePowerRoot(this.firstValue, 2)}`
    }

    static needSecondValue() {
        return false
    }
}
