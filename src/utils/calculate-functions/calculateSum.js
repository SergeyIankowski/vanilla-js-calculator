import deletePeriodicDigits from '../deletePeriodicDigits'

const calculateSum = (a, b) => {
    const res = a + b
    return deletePeriodicDigits(res)
}
export default calculateSum
