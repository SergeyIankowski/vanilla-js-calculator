import MemoryController from '../memoryController/MemoryController';
import AbstractCommand from './AbstractCommand';

export default class MemoryClearCommand extends AbstractCommand {
    execute() {
        MemoryController.clearMemoryValue();

        return `${this.firstValue}`;
    }

    static needSecondValue() {
        return false;
    }
}
