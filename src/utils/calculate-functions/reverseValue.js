import deletePeriodicDigits from '../deletePeriodicDigits'

const reverseValue = (value) => {
    const res = 1 / value
    return deletePeriodicDigits(res)
}
export default reverseValue
