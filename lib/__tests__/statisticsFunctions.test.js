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

});
