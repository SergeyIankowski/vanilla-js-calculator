const calculatePowerRoot = (number, power) => {
    let powValue = number / power;
    let temp = 0;
    while (powValue !== temp) {
        temp = powValue;
        powValue = (number / (temp * temp) + temp * 2) / 3;
    }
    return powValue;
};

export default calculatePowerRoot;
