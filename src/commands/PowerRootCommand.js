import calculatePowerRoot from '../utils/calculate-functions/calculatePowerRoot'

import AbstractCommand from './AbstractCommand'

export default class PowerRootCommand extends AbstractCommand {
    execute() {
        return `${calculatePowerRoot(this.firstValue, this.secondValue)}`
    }

    static needSecondValue() {
        return true
    }
}
