combinationsCounter = combinationsCounter || 0;
possiblePositionsRemaining = possiblePositionsRemaining || _.range(0, n - 1);

for var i = 0; i < n; i++
  new board
    start at first row

      place rook on __first__ possible position

      go to next row
        place rook on first possible position

      repeat...

      combinationsCounter++
      startingPosition++


// new board
//   start at first row

//     place rook on __second__ possible position

//     go to next row
//       place rook on first possible position

//     repeat...

//     combinationsCounter++


return  combinationsCounter++




iterator = function (counter, possiblePositionsRemaining, n) {
  for (var i = 0; i < n; i++) {
    var board = new Board({n: n});
    var row = board.get(i);

    row[possiblePositionsRemaining[0]] = 1;
    possiblePositionsRemaining.shift();

    for (var j = 0; j < possiblePositionsRemaining.length; j++) {
      var row2 = board.get(i + 1);
      row[possiblePositionsRemaining[0]] = 1;
      possiblePositionsRemaining.shift();

      for (......)
    }

  }
}