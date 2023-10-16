const gameBoard = (() => {
	const gameboard = [
		["X", "O", "O"],
		["O", "X", "X"],
		["X", "O", "X"],
	];

	const gameboardInfo = () => gameboard;
	return { info: gameboardInfo };
})();


