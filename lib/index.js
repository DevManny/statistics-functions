'use strict';

module.exports = {
    sum: numbers => numbers.reduce((actual, prev) => {
        return actual + prev;
    }, 0),

    average: numbers => this.sum(numbers) / numbers.length,

    variance: numbers => {
        const avg = this.average(numbers);
        return this.average(this.sum(numbers
            .map(number => number - avg)
            .map(number => Math.pow(number, 2))));
    }
};


