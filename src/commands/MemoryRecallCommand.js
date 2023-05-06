import MemoryController from '../memoryController/MemoryController';
import AbstractCommand from './AbstractCommand';

export default class MemoryRecallCommand extends AbstractCommand {
    execute() {
        const current = MemoryController.recallMemoryValue(this.firstValue);

        return `${current}`;
    }

    static needSecondValue() {
        return false;
    }
}
