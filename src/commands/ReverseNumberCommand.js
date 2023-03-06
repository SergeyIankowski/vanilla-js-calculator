import AbstractCommand from './AbstractCommand';

export default class ReverseNumberCommand extends AbstractCommand {
    execute() {
        return `${1 / this.firstValue}`;
    }

    static needSecondValue() {
        return false;
    }
}
