'use strict';

module.exports = {
    sum: numbers => numbers.reduce((actual, prev) => {
        return actual + prev;
    }, 0),

    average: numbers => this.sum(numbers) / numbers.length

};


