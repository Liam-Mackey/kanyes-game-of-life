class Cell {
	constructor(x, y, isAlive) {
		this.x = x;
		this.y = y;
		this.isAlive = isAlive || false;
		this.neighbors = [];
		this.board;
		this.key = this.x + ":" + this.y;
	}

	neighborKeys() {
		const self = this
		let keys = [];
		for(let i = -1; i <= 1; i++){
			for(let j = -1; j <= 1; j++){
				const key = self.makeKey(this.x, this.y, i, j);
				keys.push(key);
			}
		}
		keys.splice( keys.indexOf(this.key), 1);
		return keys;
	}

	aliveNeighborCount() {
		return this.neighbors.filter(function( neighborCell){
			return neighborCell.isAlive;
		}).length;
	};

	makeKey(x, y, xOffset, yOffset) {
		return (x + xOffset) + ":" + (y + yOffset);
	};
}