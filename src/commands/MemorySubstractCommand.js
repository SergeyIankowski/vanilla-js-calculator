import MemoryController from '../memoryController/MemoryController';
import AbstractCommand from './AbstractCommand';

export default class MemorySubstractCommand extends AbstractCommand {
    execute() {
        MemoryController.substractValueFromMemory(this.firstValue);

        return `${this.firstValue}`;
    }

    static needSecondValue() {
        return false;
    }
}
