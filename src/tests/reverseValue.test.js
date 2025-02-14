import reverseValue from '../utils/calculate-functions/reverseValue'

describe('reverseValue: ', () => {
    it('shout be defined', () => {
        expect(reverseValue(1)).toBeDefined()
    })
    it('should do calculations with integer numbers', () => {
        expect(reverseValue(2)).toBe(0.5)
        expect(reverseValue(3)).toBe(0.333333)
        expect(reverseValue(8)).toBe(0.125)
    })
    it('should do not calculations fractional numbers', () => {
        expect(reverseValue(0.2)).toBe(5)
        expect(reverseValue(0.3)).toBe(3.333333)
        expect(reverseValue(0.5)).toBe(2)
        expect(reverseValue(0.345)).toBe(2.898551)
    })
    it('should do calculations with negative numbers', () => {
        expect(reverseValue(-2)).toBe(-0.5)
        expect(reverseValue(-3)).toBe(-0.333333)
        expect(reverseValue(-12)).toBe(-0.083333)
    })
})
