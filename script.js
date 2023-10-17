const gameboard = (() => {
	const rows = 3;
	const columns = 3;
	const board = [];

	const X = createPlayer("Player", "x").printSymbol();
	const O = createPlayer("Player", "o").printSymbol();
	let currentPlayer = X;

	for (let i = 0; i < rows; i++) {
		board[i] = [];
		for (let j = 0; j < columns; j++) {
			board[i].push(createPlayer("Player", "x").printSymbol);
		}
	}

	const getBoard = () => board;

	const markOnBoard = (row, col) => {
		if (board[row][col] === "") {
			board[row][col] = currentPlayer;

			currentPlayer = currentPlayer === "X" ? "O" : "X";
		} else {
			alert("That spot is already taken. Please choose another one.");
		}
	};

	return { getBoard, markBoard: markOnBoard,  };
})();

function createPlayer(name, symbol = "", move) {
	const printName = () => `Player name is ${name}`;
	const printSymbol = () => symbol.toUpperCase();
	const updateSymbol = (newSymbol) => (symbol = newSymbol);

	return { printName, printSymbol, updateSymbol };
}

// const cqveman = createPlayer("cqveman", "x");

const gameControl = (() => {
	const winner = () => winner;
	const isGameOver = () => isGameOver;
})();
