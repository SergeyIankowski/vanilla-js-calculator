import calculatePowerOfNumber from '../utils/calculate-functions/calculatePowerOfNumber'

describe('calculatePowerOfNumber: ', () => {
    it('shout be defined', () => {
        expect(calculatePowerOfNumber(1, 2)).toBeDefined()
    })
    it('should do calculations with integer numbers', () => {
        expect(calculatePowerOfNumber(2, 3)).toBe(8)
        expect(calculatePowerOfNumber(4, 0)).toBe(1)
        expect(calculatePowerOfNumber(12, 3)).toBe(1728)
    })
    it('should do calculations with fractional numbers', () => {
        expect(calculatePowerOfNumber(0.2, 0.5)).toBe(0.4472135954999579)
        expect(calculatePowerOfNumber(2, 0.3)).toBe(1.2311444133449163)
        expect(calculatePowerOfNumber(11, 0.9)).toBe(8.654727864164496)
    })
})
