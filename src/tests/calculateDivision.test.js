import calculateDivision from '../utils/calculate-functions/calculateDivision';

describe('calculateDivision: ', () => {
    it('shout be defined', () => {
        expect(calculateDivision(1, 2)).toBeDefined();
    });
    it('should do calculations with integer numbers', () => {
        expect(calculateDivision(4, 2)).toBe(2);
        expect(calculateDivision(27, 9)).toBe(3);
        expect(calculateDivision(1755, 27)).toBe(65);
    });
    it('should do calculations with fractional numbers', () => {
        expect(calculateDivision(0.6, 0.2)).toBe(3);
        expect(calculateDivision(15, 0.2)).toBe(75);
        expect(calculateDivision(17, 28)).toBe(0.607143);
    });
    it('should return Infitiny with diviion by zero', () => {
        expect(calculateDivision(13, 0)).toBe(Infinity);
        expect(calculateDivision(45, 0)).toBe(Infinity);
    });
});
