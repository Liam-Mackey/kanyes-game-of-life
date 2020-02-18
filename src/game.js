class Game {
	constructor(params) {
		this.initialState;
		this.cells;
		this.board;
		this.iterationCount = 0;
		this.timeout;
		this.rowCount;
		this.columnCount;
		this.boardCache = [];

		this.init(params);
	}


	init(params) {
		this.initialState = params ? params.initialState : '-----,' +
							'--x--,' +
							'--x--,' +
							'--x--,' +
							'-----,';

		const input = inputParser.parse(this.initialState);
		this.cells = input.cells;
		this.rowCount = input.rowCount;
		this.columnCount = input.columnCount;

		this.board = new Board(this.cells);
		this.timeout = params ? params.timeout : 100;
	};

	iterate() {
		this.cells.map(function(cell){
			return cell.board.shouldFlipCell(cell) ? cell : '';
		}).filter(function(e){return e}).forEach(function(cell){
			cell.isAlive = !cell.isAlive;
		});

		this.iterationCount++;
		return true;
	};

	toString() {
		let str = '';
		const regex = new RegExp('.{1,' + this.rowCount + '}', "g");
		this.cells.forEach(function(cell){
			str = str + (cell.isAlive ? "x" : "-");
		});

		return str.match(regex).join(',');

	};

	shouldEndGame() {
		const wasChanged = this.boardCache[this.iterationCount - 1].length != 0;
		return wasChanged;
	};
}