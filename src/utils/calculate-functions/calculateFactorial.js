const calculateFactorial = (number) => {
    return number && number > 0 ? number * calculateFactorial(number - 1) : 1;
};

export default calculateFactorial;
