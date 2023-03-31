const deletePeriodicDigits = (strNumber) => {
    const num = Number(strNumber);
    let roundedNumbStr = num.toFixed(6);
    while (
        roundedNumbStr.includes('.') &&
        (roundedNumbStr.at(-1) === '0' ||
            roundedNumbStr.at(-1) === '9' ||
            roundedNumbStr.at(-1) === '.')
    ) {
        roundedNumbStr = roundedNumbStr.substring(0, roundedNumbStr.length - 1);
    }
    const roundedNumb = Number(roundedNumbStr);
    return roundedNumb;
};

export default deletePeriodicDigits;
