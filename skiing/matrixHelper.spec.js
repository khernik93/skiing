const matrixHelper = require("./matrixHelper");
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

describe('matrixHelper.getCoordinatesListFromMatrix - good cases', function () {

    it('ensure that the number is correct', function () {
        const randomMatrix = getRandomMatrix(200, 10);
        const actualOutput = matrixHelper.getCoordinatesListFromMatrix(randomMatrix);
        assert.equal(actualOutput.length, 200*200);
    });

    it('get list of coordinates for a matrix', function () {

        const matrix = [
            [2, 5],
            [1, 6]
        ];
        const actualOutput = matrixHelper.getCoordinatesListFromMatrix(matrix);
        assert.deepEqual(actualOutput, [[0, 0], [0, 1], [1, 0], [1, 1]]);

    });

});

describe('matrixHelper.getCoordinatesListFromMatrix - edge cases', function () {

    it('empty matrix', function () {

        const matrix = [
            []
        ];
        const actualOutput = matrixHelper.getCoordinatesListFromMatrix(matrix);
        assert.deepEqual(actualOutput, []);

    });

});
