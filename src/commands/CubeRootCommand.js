import calculatePowerRoot from '../utils/calculate-functions/calculatePowerRoot';
import AbstractCommand from './AbstractCommand';

export default class CubeRootCommand extends AbstractCommand {
    execute() {
        return `${calculatePowerRoot(this.firstValue, 3)}`;
    }

    static needSecondValue() {
        return false;
    }
}
