const _ = require("lodash");

/**
 * For a NxN matrix, returns a list of arrays. Each array in this list
 * contains key-value pair (i, j) where i -> index in a row, j -> index in a column
 *
 * @param [][] matrix
 * @returns [][]
 */
const getCoordinatesListFromMatrix = matrix => (
    _.flatten(matrix.map((row, i) => (
        row.map((cell, j) => [i, j])
    )))
);

/**
 * Return 2D array of size N filled with -1 values
 *
 * @param int N
 * @returns [][]
 */
const fillWithDummyValues = N => {
    let matrix = [];
    for (let i = 0; i < N; i++) {
        matrix.push([]);
        for (let j = 0; j < N; j++) {
            matrix[i].push(-1);
        }
    }
    return matrix;
}

module.exports = {
    getCoordinatesListFromMatrix,
    fillWithDummyValues,
};
