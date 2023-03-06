import AbstractCommand from './AbstractCommand';

export default class MemoryClearCommand extends AbstractCommand {
    execute() {
        if (localStorage.getItem('memoryValue')) localStorage.clear();

        return `${this.firstValue}`;
    }

    static needSecondValue() {
        return false;
    }
}
