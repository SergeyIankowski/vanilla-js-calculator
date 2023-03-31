import { savedValue } from '../models/localStorageFields';

class MemoryController {
    static addValueToMemory(value) {
        if (localStorage.getItem(savedValue)) {
            const prevStr = localStorage.getItem(savedValue);
            const cur = parseInt(value, 10) + parseInt(prevStr, 10);
            localStorage.setItem(savedValue, cur.toString());
            return;
        }

        localStorage.setItem(savedValue, value.toString());
    }

    static substractValueFromMemory(value) {
        if (localStorage.getItem(savedValue)) {
            const prevStr = localStorage.getItem(savedValue);
            const cur = parseInt(prevStr, 10) - parseInt(value, 10);
            localStorage.setItem(savedValue, cur.toString());
            return;
        }

        localStorage.setItem(savedValue, value.toString());
    }

    static clearMemoryValue() {
        if (localStorage.getItem(savedValue)) {
            localStorage.setItem(savedValue, 0);
        }
    }

    static recallMemoryValue(value) {
        const current = localStorage.getItem(savedValue) ? localStorage.getItem(savedValue) : value;
        return current;
    }
}

export default MemoryController;
