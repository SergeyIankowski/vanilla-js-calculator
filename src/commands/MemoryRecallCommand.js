import AbstractCommand from './AbstractCommand';

export default class MemoryRecallCommand extends AbstractCommand {
    execute() {
        const current = localStorage.getItem('memoryValue')
            ? localStorage.getItem('memoryValue')
            : this.firstValue;

        return `${current}`;
    }

    static needSecondValue() {
        return false;
    }
}
