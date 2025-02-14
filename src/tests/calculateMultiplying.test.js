import calculateMultiplying from '../utils/calculate-functions/calculateMultiplying'

describe('calculateMultiplying: ', () => {
    it('shout be defined', () => {
        expect(calculateMultiplying(1, 2)).toBeDefined()
    })
    it('should do calculations with integer numbers', () => {
        expect(calculateMultiplying(2, 2)).toBe(4)
        expect(calculateMultiplying(0, 4)).toBe(0)
        expect(calculateMultiplying(121, 27)).toBe(3267)
    })
    it('should do calculations with fractional numbers', () => {
        expect(calculateMultiplying(0.2, 0.5)).toBe(0.1)
        expect(calculateMultiplying(0.3, 0.7)).toBe(0.21)
        expect(calculateMultiplying(11.4, 0.7)).toBe(7.98)
    })
    it('should do not imprecise calculations calculations', () => {
        expect(calculateMultiplying(0.1, 0.2)).toBe(0.02)
        expect(calculateMultiplying(0.28, 0.14)).toBe(0.0392)
    })
})
