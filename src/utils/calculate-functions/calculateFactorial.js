const calculateFactorial = (number) => {
    if (!Number.isInteger(number)) return false;
    if (number < 0) {
        const curNum = -number;
        return -(curNum * calculateFactorial(curNum - 1));
    }
    return number && number >= 0 ? number * calculateFactorial(number - 1) : 1;
};

export default calculateFactorial;
