const businessLogic = require("./businessLogic");
const assert = require('assert');

const getRandomMatrix = (a, maxNum) => {
    let randomMatrix = [];
    for (let i = 0; i < a; i++) {
        randomMatrix.push([]);
        for(let j = 0; j < a; j++) {
            randomMatrix[i].push(Math.random()*maxNum)
        }
    }
    return randomMatrix;
};

describe('businessLogic.getLongestPaths - good cases', function () {

    it('stress test for 1000x1000', function () {

        this.timeout(10000);
        const bigMatrix = getRandomMatrix(1000, 10000);
        const actualOutput = businessLogic.getLongestPaths(bigMatrix);
        assert.notEqual(false, actualOutput);

    });

    it('medium input matrix', function () {

        const matrix = [
            [51,39,64,4,42,15,23,35],
            [20,84,66,91,72,38,19,55],
            [94,7,28,99,36,69,8,99],
            [79,98,91,73,11,60,76,61],
            [98,40,65,40,54,88,74,73],
            [71,40,63,43,77,82,97,71],
            [89,24,71,24,93,79,23,71],
            [76,14,43,86,73,19,47,71],
        ];
        const actualOutput = businessLogic.getLongestPaths(matrix);
        assert.deepEqual(actualOutput, [{
            startingPoint: "(3, 1)",
            pathLength: 7,
            path: [98, 91, 65, 63, 40, 24, 14],
        }]);

    });

    it('small input matrix', function () {

        const matrix = [
            [2, 5],
            [1, 6]
        ];
        const actualOutput = businessLogic.getLongestPaths(matrix);
        assert.deepEqual(actualOutput, [
            {
                startingPoint: "(1, 1)",
                pathLength: 4,
                path: [ 6, 5, 2, 1 ]
            }
        ]);

    });

    it('multiple longest paths', function () {

        const matrix = [
            [9, 5],
            [1, 8]
        ];
        const actualOutput = businessLogic.getLongestPaths(matrix);
        assert.deepEqual(actualOutput, [
            {
                startingPoint: '(0, 0)',
                pathLength: 2,
                path: [ 9, 1 ]
            },
            {
                startingPoint: '(1, 1)',
                pathLength: 2,
                path: [ 8, 5 ]
            }
        ]);

    });

});

describe('businessLogic.getLongestPaths - edge cases', function () {

    it('one element', function () {

        const matrix = [
            [51]
        ];
        const actualOutput = businessLogic.getLongestPaths(matrix);
        assert.deepEqual(actualOutput, [{
            startingPoint: "(0, 0)",
            pathLength: 1,
            path: [51],
        }]);

    });

    it('zero elements', function () {

        const matrix = [
            []
        ];
        const actualOutput = businessLogic.getLongestPaths(matrix);
        assert.deepEqual(actualOutput, []);

    });

    it('incorrect matrix', function () {

        const incorrectMatrix = [];
        const actualOutput = businessLogic.getLongestPaths(incorrectMatrix);
        assert.deepEqual(actualOutput, []);

    });

});

describe('businessLogic.getSteepestPaths - good cases', function () {

    it('for two paths', function () {

        const paths = [
            {
                startingPoint: '(0, 0)',
                pathLength: 2,
                path: [ 9, 1 ]
            },
            {
                startingPoint: '(1, 1)',
                pathLength: 2,
                path: [ 8, 5 ]
            }
        ];
        const actualOutput = businessLogic.getSteepestPaths(paths);
        assert.deepEqual(actualOutput, [
            {
                startingPoint: '(0, 0)',
                pathLength: 2,
                path: [ 9, 1 ]
            }
        ]);
    });

});

describe('businessLogic.getSteepestPaths - edge cases', function () {

    it('zero paths', function () {

        const paths = [];
        const actualOutput = businessLogic.getSteepestPaths(paths);
        assert.deepEqual(actualOutput, []);

    });

});
