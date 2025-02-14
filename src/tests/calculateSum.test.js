import calculateSum from '../utils/calculate-functions/calculateSum'

describe('calculateSum: ', () => {
    it('shout be defined', () => {
        expect(calculateSum(1, 2)).toBeDefined()
    })
    it('should do calculations with integer numbers', () => {
        expect(calculateSum(1, 2)).toBe(3)
        expect(calculateSum(0, 4)).toBe(4)
        expect(calculateSum(121, 2786)).toBe(2907)
    })
    it('should do calculations with fractional numbers', () => {
        expect(calculateSum(0.2, 0.5)).toBe(0.7)
        expect(calculateSum(0.3, 0.7)).toBe(1)
        expect(calculateSum(0.4, 0.7)).toBe(1.1)
    })
    it('should do not imprecise calculations calculations', () => {
        expect(calculateSum(0.1, 0.2)).toBe(0.3)
        expect(calculateSum(0.6, 0.7)).toBe(1.3)
        expect(calculateSum(0.1, 0.7)).toBe(0.8)
        expect(calculateSum(0.11, 0.7)).toBe(0.81)
    })
})
