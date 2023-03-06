const deletePeriodicDigits = (strNumber) => {
    const num = +strNumber;
    let roundedNumbStr = num.toFixed(6);
    while (
        roundedNumbStr.includes('.') &&
        (roundedNumbStr.at(-1) === '0' ||
            roundedNumbStr.at(-1) === '9' ||
            roundedNumbStr.at(-1) === '.')
    ) {
        roundedNumbStr = roundedNumbStr.substring(0, roundedNumbStr.length - 1);
    }
    return roundedNumbStr;
};

export default deletePeriodicDigits;
