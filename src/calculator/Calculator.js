import deletePeriodicDigits from '../utils/deletePeriodicDigits';

export default class Calculator {
    constructor() {
        this.value = null;
        this.history = [];
    }

    executeCommand(command) {
        const newValue = command.execute();
        this.value = deletePeriodicDigits(newValue);
        if (newValue) {
            this.history.push(command);
        }
    }

    undo() {
        const command = this.history.pop();
        if (command) {
            this.value = command.undo(this.value);
        }
    }
}
