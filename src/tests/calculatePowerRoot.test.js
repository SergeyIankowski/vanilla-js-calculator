import calculatePowerRoot from '../utils/calculate-functions/calculatePowerRoot';

describe('calculatePowerRoot: ', () => {
    it('shout be defined', () => {
        expect(calculatePowerRoot(1, 2)).toBeDefined();
    });
    it('should do calculations with integer numbers', () => {
        expect(calculatePowerRoot(8, 3)).toBe(2);
        expect(calculatePowerRoot(16, 4)).toBe(2);
    });
    it('should do calculations with fractional numbers', () => {
        expect(calculatePowerRoot(0.008, 3)).toBe(0.2);
        expect(calculatePowerRoot(0.0016, 4)).toBe(0.2);
        expect(calculatePowerRoot(0.03125, 5)).toBe(0.5);
    });
    it('should return Infitiny with diviion by zero', () => {
        expect(calculatePowerRoot(64, 3)).toBe(4);
        expect(calculatePowerRoot(125, 3)).toBe(5);
    });
});
