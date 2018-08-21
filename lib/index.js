'use strict';

module.exports = {
    sum: numbers => numbers.reduce((actual, prev) => {
        return actual + prev;
    }, 0)
};

