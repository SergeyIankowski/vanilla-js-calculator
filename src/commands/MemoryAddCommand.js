import AbstractCommand from './AbstractCommand';

export default class MemoryAddCommand extends AbstractCommand {
    execute() {
        if (localStorage.getItem('memoryValue')) {
            const prevStr = localStorage.getItem('memoryValue');
            const cur = +this.firstValue + +prevStr;
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
