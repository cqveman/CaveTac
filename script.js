const gameBoard = (() => {
	const gameboard = [
		["X", "O", "O"],
		["O", "X", "X"],
		["X", "O", "X"],
	];

	const gameboardInfo = () => gameboard;
	return { info: gameboardInfo };
})();

function createPlayer(name, symbol = "", move) {
	const printName = () => `Player name is ${name}`;
	const printSymbol = () => symbol.toUpperCase();

	return { printName, printSymbol };
}

const cqveman = createPlayer("cqveman", "x");

const gameControl = (() => {
    const winner = () => winner;
    const isGameOver = () => isGameOver;
})();