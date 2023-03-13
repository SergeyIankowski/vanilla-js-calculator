import deletePeriodicDigits from '../deletePeriodicDigits';

const calculateMultiplying = (a, b) => {
    const res = a * b;
    return deletePeriodicDigits(res);
};
export default calculateMultiplying;
