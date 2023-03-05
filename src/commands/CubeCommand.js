import AbstractCommand from './AbstractCommand';

export default class CubeCommand extends AbstractCommand {
    execute() {
        return `${this.firstValue ** 3}`;
    }

    static needSecondValue() {
        return false;
    }
}
