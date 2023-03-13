import AbstractCommand from './AbstractCommand';

export default class MemorySubstractCommand extends AbstractCommand {
    execute() {
        if (localStorage.getItem('memoryValue')) {
            const prevStr = localStorage.getItem('memoryValue');
            const cur = +prevStr - +this.firstValue;
            const curStr = `${cur}`;
            localStorage.setItem('memoryValue', curStr);
        } else {
            localStorage.setItem('memoryValue', `${this.firstValue}`);
        }

        return `${this.firstValue}`;
    }

    static needSecondValue() {
        return false;
    }
}
