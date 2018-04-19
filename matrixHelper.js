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

module.exports = {
    getCoordinatesListFromMatrix,
};
