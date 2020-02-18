var inputParser = function(){
  var parse = function(input){
    const rawBoard = input;               
    let rows = rawBoard.split(',');
    let cells = [];
    for(let i=0; i<rows.length; i++){
      let columns = rows[i].split('');
      for(let j=0; j<columns.length; j++){
        cells.push( new Cell(i,j, (columns[j] == 'x') ) );
      }
    }
    return {cells: cells,
            columnCount: rawBoard.split(',')[0].split('').length,
            rowCount: (rawBoard.match(/,/g) || []).length
    }
  };
  return {parse: parse};
}();