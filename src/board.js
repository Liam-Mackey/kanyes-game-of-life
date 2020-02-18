class Board {
	constructor(cells, coordinates) {
		this.coordinates = coordinates || {};
		this.cells = cells;
		let self = this
		self.cells.forEach(function(cell){
			cell.board = self;
			self.coordinates[cell.key] = cell;
		});
		self.cells.forEach(this.assignNeighborCells.bind(this));
	}

	assignNeighborCells(cell) {
		var self = this;
		console.log(cell)
		var keys = cell.neighborKeys();

		keys.forEach(function(key){
			cell.neighbors.push(this.coordinates[key]);
		}.bind(self));

		cell.neighbors = cell.neighbors.filter(function(item){return item != undefined });
	};

	getCellStatus(cell) {
		return this.gameLogic(cell.isAlive, cell.aliveNeighborCount() )
	};

	gameLogic(isAlive, neighborCount) {
		return (isAlive && neighborCount == 2 )|| neighborCount == 3;
	};

	shouldFlipCell(cell) {
		return this.getCellStatus(cell) != cell.isAlive;
	};
}