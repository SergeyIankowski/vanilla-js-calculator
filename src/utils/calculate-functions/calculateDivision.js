import deletePeriodicDigits from '../deletePeriodicDigits'

const calculateDivision = (divisible, divider) => {
    const res = divisible / divider
    return deletePeriodicDigits(res)
}
export default calculateDivision
