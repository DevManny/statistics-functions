// const assert = require('assert');
const statistics = require('../index.js');

describe('statisticsFunctions', function () {
    it('sum', function () {
        test('1+2+3 to equal 6', () => {
            expect(statistics.sum([1,2,3])).toBe(6);
        });
    });

    it('average', function () {
        test('average of 1,2,3 to equal 2', () => {
            expect(statistics.average([1,2,3])).toBe(2);
        });
    });

    it('variance', function () {
        test('variance of 1,2,3,4,5,6,7,8 to equal 5.25', () => {
            expect(statistics.variance([1,2,3,4,5,6,7,8])).toBe(5.25);
        });
        test('variance of 4,5,6,7,8,9,10 to equal 4', () => {
            expect(statistics.variance([4,5,6,7,8,9,10])).toBe(4);
        });
    });

    it('standard deviation', function () {
        test('standard deviation of 1,2,3,4,5,6,7,8 to equal 2.4494897427832', () => {
            expect(statistics.standardDeviation([1,2,3,4,5,6,7,8])).toBe(2.4494897427832);
        });
        test('standard deviation of 4,5,6,7,8,9,10 to equal 2.1602468994693', () => {
            expect(statistics.standardDeviation([4,5,6,7,8,9,10])).toBe(2.1602468994693);
        });
    });
});
