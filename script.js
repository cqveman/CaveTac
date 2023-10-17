const gameboard = (() => {
	const rows = 3;
	const columns = 3;
	const board = [];

	for (let i = 0; i < rows; i++) {
		board[i] = [];
		for (let j = 0; j < columns; j++) {
			board[i].push(createPlayer("Player", "x").printSymbol)
		}
	}

	const gameboardInfo = () => board;
	return { gameboardInfo: gameboardInfo };
})();

function createPlayer(name, symbol = "", move) {
	const printName = () => `Player name is ${name}`;
	const printSymbol = () => symbol.toUpperCase();
	const updateSymbol = (newSymbol) => symbol = newSymbol;

	return { printName, printSymbol, updateSymbol};
}

const cqveman = createPlayer("cqveman", "x");

const gameControl = (() => {
	const winner = () => winner;
	const isGameOver = () => isGameOver;
})();
