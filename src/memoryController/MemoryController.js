import { savedValue } from '../models/localStorageKeys';
import calculateSubstraction from '../utils/calculate-functions/calculateSubstraction';
import calculateSum from '../utils/calculate-functions/calculateSum';

class MemoryController {
    static addValueToMemory(value) {
        if (localStorage.getItem(savedValue)) {
            const prevStr = localStorage.getItem(savedValue);
            const cur = calculateSum(Number(value), Number(prevStr));
            localStorage.setItem(savedValue, cur.toString());
            return;
        }

        localStorage.setItem(savedValue, value.toString());
    }

    static substractValueFromMemory(value) {
        if (localStorage.getItem(savedValue)) {
            const prevStr = localStorage.getItem(savedValue);
            const cur = calculateSubstraction(Number(prevStr), Number(value));
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
