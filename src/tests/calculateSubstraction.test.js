import calculateSubstraction from '../utils/calculate-functions/calculateSubstraction'

describe('calculateSubstraction: ', () => {
    it('shout be defined', () => {
        expect(calculateSubstraction(1, 2)).toBeDefined()
    })
    it('should do calculations with integer numbers', () => {
        expect(calculateSubstraction(10, 5)).toBe(5)
        expect(calculateSubstraction(20, 18)).toBe(2)
        expect(calculateSubstraction(121, 2555)).toBe(-2434)
    })
    it('should do calculations with fractional numbers', () => {
        expect(calculateSubstraction(0.5, 0.2)).toBe(0.3)
        expect(calculateSubstraction(0.7, 0.2)).toBe(0.5)
        expect(calculateSubstraction(35.4, 13.7)).toBe(21.7)
    })
})
