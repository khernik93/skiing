const matrixHelper = require("./matrixHelper");

const getLongestPaths = matrix => {

    const getAllPathsFromPoint = (i, j) => {
        let longestPathSize = 0;
        let path = [];
        possibleDirections.forEach(direction => {
            // next coordinate on a path
            const next_i = i + direction[0];
            const next_j = j + direction[1];
            // If cell indexes to be checked is valid
            if (0 <= next_i  && next_i < N && 0 <= next_j && next_j < matrix[i].length) {
                // If value on checked side is smaller
                if (matrix[next_i][next_j] < matrix[i][j]) {
                    // Recursive call for each possible direction - with new coordinates
                    // If the path was already calculated - take it from cache
                    if (memoized[next_i][next_j] === -1) {
                        memoized[next_i][next_j] = getAllPathsFromPoint(next_i, next_j);
                    }
                    const memoizedNext = memoized[next_i][next_j];
                    if (memoizedNext.pathLength > longestPathSize) {
                        // Save new path element, if the new path is longer than current longest path
                        longestPathSize = memoizedNext.pathLength;
                        path = memoizedNext.path;
                    }
                }
            }
        });
        return {
            startingPoint: `(${i}, ${j})`,
            pathLength: ++longestPathSize,
            path: [matrix[i][j]].concat(path),
        };
    };

    const N = matrix.length;
    const possibleDirections = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let memoized = matrixHelper.fillWithDummyValues(N);

    // For each coordinate in a matrix, get all possible decreasing paths
    const coordinatesList = matrixHelper.getCoordinatesListFromMatrix(matrix);
    const allPaths = coordinatesList
        .map(coord => getAllPathsFromPoint(coord[0], coord[1]));

    // Calculate the longest path's size
    const longestPathsSize = allPaths
        .map(obj => obj.path.length)
        .reduce((a, b) => Math.max(a, b), 0);

    // Get only the longest paths
    const longestPaths = allPaths
        .filter(obj => obj.path.length === longestPathsSize);

    return longestPaths;

};

const getSteepestPaths = (paths) => {
    const pathRatios = paths
        .map(obj => obj.path)
        .map(path => path.reduce((a, b) => Math.max(a, b))/path.length, 0);

    const highestRatio = pathRatios
        .reduce((a, b) => Math.max(a, b), 0);

    const steepestPaths = paths
        .filter((obj, i) => pathRatios[i] === highestRatio);

    return steepestPaths;
};

module.exports = {
    getLongestPaths,
    getSteepestPaths,
};
