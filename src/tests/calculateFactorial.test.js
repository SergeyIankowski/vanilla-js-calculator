import calculateFactorial from '../utils/calculate-functions/calculateFactorial'

describe('calculateFactorial: ', () => {
    it('shout be defined', () => {
        expect(calculateFactorial(1)).toBeDefined()
    })
    it('should do calculations with integer numbers', () => {
        expect(calculateFactorial(2)).toBe(2)
        expect(calculateFactorial(3)).toBe(6)
        expect(calculateFactorial(8)).toBe(40320)
    })
    it('should do not calculations fractional numbers', () => {
        expect(calculateFactorial(0.2)).toBe(false)
        expect(calculateFactorial(0.3)).toBe(false)
        expect(calculateFactorial(0.5)).toBe(false)
    })
    it('should do calculations with negative numbers', () => {
        expect(calculateFactorial(-2)).toBe(-2)
        expect(calculateFactorial(-3)).toBe(-6)
        expect(calculateFactorial(-8)).toBe(-40320)
    })
})
