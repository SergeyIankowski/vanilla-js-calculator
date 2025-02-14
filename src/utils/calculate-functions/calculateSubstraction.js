import deletePeriodicDigits from '../deletePeriodicDigits'

const calculateSubstraction = (a, b) => {
    const res = a - b
    return deletePeriodicDigits(res)
}
export default calculateSubstraction
