const logger = require("./skiing/logger");
const businessLogic = require("./skiing/businessLogic");

const input = [
    [51,39,64,4,42,15,23,35],
    [20,84,66,91,72,38,19,55],
    [94,7,28,99,36,69,8,99],
    [79,98,91,73,11,60,76,61],
    [98,40,65,40,54,88,74,73],
    [71,40,63,43,77,82,97,71],
    [89,24,71,24,93,79,23,71],
    [76,14,43,86,73,19,47,71],
];

if (input.length < 50) {
	logger.ok("Input matrix:");
	logger.comment(input);
}

const longestPaths = businessLogic.getLongestPaths(input);
logger.ok(`Found ${longestPaths.length} longest paths`);
logger.comment(longestPaths);

const longestAndSteepestPaths = businessLogic.getSteepestPaths(longestPaths);
logger.ok(`Found ${longestAndSteepestPaths.length} longest and steepest paths`);
logger.comment(longestAndSteepestPaths);
