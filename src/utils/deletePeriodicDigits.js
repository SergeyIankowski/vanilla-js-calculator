const deletePeriodicDigits = (strNumber) => {
    const num = parseInt(strNumber, 10);
    let roundedNumbStr = num.toFixed(6);
    while (
        roundedNumbStr.includes('.') &&
        (roundedNumbStr.at(-1) === '0' ||
            roundedNumbStr.at(-1) === '9' ||
            roundedNumbStr.at(-1) === '.')
    ) {
        roundedNumbStr = roundedNumbStr.substring(0, roundedNumbStr.length - 1);
    }
    const roundedNumb = parseInt(roundedNumbStr, 10);
    return roundedNumb;
};

export default deletePeriodicDigits;
