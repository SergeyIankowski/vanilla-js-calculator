import deletePeriodicDigits from '../deletePeriodicDigits';

const calculatePowerRoot = (number, power) => {
    let powValue = number / power;
    let temp = 0;
    while (powValue !== temp) {
        temp = powValue;
        powValue = (number / temp ** (power - 1) + temp * (power - 1)) / power;
    }
    const result = deletePeriodicDigits(powValue);
    return result;
};

export default calculatePowerRoot;
