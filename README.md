## Providing the input matrix:

Please place your matrix in the skiing.js file as the **input** variable.

## Running the algorithm

	$ npm i
	$ node skiing.js

This will output the results to STDOUT in the following format:

    Found 1 longest paths 
     [ { startingPoint: '(3, 1)',
        pathLength: 7,
        path: [ 98, 91, 65, 63, 40, 24, 14 ] } ] 
     Found 1 longest and steepest paths 
     [ { startingPoint: '(3, 1)',
        pathLength: 7,
        path: [ 98, 91, 65, 63, 40, 24, 14 ] } ] 

## Running tests

	$ mocha *.spec.js*

## Description

For the N x N matrix, the program will show:
1. The list of the longest, decrementing paths in the whole matrix. For example:

    
        [5, 4],
        [2, 3]       
    
The longest path in the decrementing order here is **5 -> 4 -> 3 -> 2**

2. The list of the steepest paths, from the longest paths:

Having multiple longest paths, we want to get the steepest ones. If we have, for example, two longest paths like this:

    [5, 4, 2, 1]
    [9, 2, 2, 1]
    
The steepest one will be **[9, 2, 2, 1]**, because:

    ratio = (max_array_element)/(array_length)
    ratio_first = 5/4 = 1.25
    ratio_second = 9/4 = 2.25
    ratio_second > ratio_first

