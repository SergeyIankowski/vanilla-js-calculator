const calculatePowerRoot = (number, power) => {
    let cbrt = number / power;
    let temp = 0;
    while (cbrt !== temp) {
        temp = cbrt;
        cbrt = (number / (temp * temp) + temp * 2) / 3;
    }
    return cbrt;
};

export default calculatePowerRoot;
