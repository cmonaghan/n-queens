/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var solution = [];
  var possiblePositions = _.range(0, n - 1);

  for (var j = 0; j < n; j++) {
    solution.push([]);

    for (var k = 0; k < n; k++) {
      solution[j].push(0);
    }

    solution[j][possiblePositions[j]] = 1;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var solutionCount = 0;
  var possiblePositions = _.range(0, n);

  var iterator = function(possiblePositions) {
    if (possiblePositions.length === 1) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < possiblePositions.length; i++) {
      var newPositions = possiblePositions.slice();
      newPositions.splice(i, 1);
      iterator(newPositions);
    }
  };

  iterator(possiblePositions);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined;

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var counter = 0;
  var possiblePositions = _.range(0, n);
  var majorDiagonalPositions = [];
  var minorDiagonalPositions = [];

  // function to remove diagonals from copy array
  var removeDiagonals = function (possibleRowPositions, diagonal) {
    for (var i = 0; i < diagonal.length; i++) {
      if (possibleRowPositions.indexOf(diagonal[i]) !== -1) {
        var idx = possibleRowPositions.indexOf(diagonal[i]);
        possibleRowPositions.splice(idx, 1);
      }
    }
  };

  var iterator = function(possiblePositions, majorDiagonalPositions, minorDiagonalPositions) {

    if (possiblePositions.length === 0) {
      counter++;
      return;
    }

    // copy possiblePositions
    var possibleRowPositions = possiblePositions.slice();

    // remove diagonals from copy
    removeDiagonals(possibleRowPositions, majorDiagonalPositions);
    removeDiagonals(possibleRowPositions, minorDiagonalPositions);

    // for loop over each index on row (using possibleRowPositions)
    for (var colIdx = 0; colIdx < possibleRowPositions.length; colIdx++) {

      // Loop over rows
      for (var rowIdx = 0; rowIdx < n; rowIdx++) {

        // push chosen position to diagonals
        majorDiagonalPositions.push(colIdx);
        minorDiagonalPositions.push(colIdx);

        // remove chosen value from copy
        possibleRowPositions.splice(colIdx, 1);

        // remove same value from possiblePositions
        possiblePositions.splice(colIdx, 1);

        // call iterator(possiblePositions, M, m)
        iterator(possiblePositions, majorDiagonalPositions, minorDiagonalPositions)

        // M++
        for (var i = 0; i < majorDiagonalPositions.length; i++) {
          majorDiagonalPositions[i] += 1;
        }

        // m--
        for (var i = 0; i < minorDiagonalPositions.length; i++) {
          minorDiagonalPositions[i] -= 1;
        }
      }
    }
  };

  // call the iterator
  iterator(possiblePositions, majorDiagonalPositions, minorDiagonalPositions);

  console.log('Number of solutions for ' + n + ' queens:', counter);
  return counter;
};