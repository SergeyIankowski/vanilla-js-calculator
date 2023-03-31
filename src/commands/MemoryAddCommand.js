import MemoryController from '../memoryController/MemoryController';
import AbstractCommand from './AbstractCommand';

export default class MemoryAddCommand extends AbstractCommand {
    execute() {
        MemoryController.addValueToMemory(this.firstValue);

        return `${this.firstValue}`;
    }

    static needSecondValue() {
        return false;
    }
}
