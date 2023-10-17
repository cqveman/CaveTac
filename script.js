const gameboard = (() => {
	let board = [];
  
	const init = () => {
	  board = [null, null, null, null, null, null, null, null, null];
	};
  
	const getBoard = () => board;
  
	const reset = () => init();
  
	const makeMove = (player, position) => {
	  if (board[position] === null) {
		board[position] = player;
	  } else {
		alert("That spot is already taken. Please choose another one.");
	  }
	};
  
	const displayTable = () => {
	  console.log(board);
	};
  
	return { init, getBoard, reset, makeMove, displayTable };
  })();
  
  function createPlayer(symbol = "") {
	const getSymbol = () => symbol.toUpperCase();
  
	return { getSymbol };
  }
  
  const gameController = (() => {
	const player1 = createPlayer("X");
	const player2 = createPlayer("O");
  
	let currentPlayer = null;
	let gameOver = false;
  
	const startGame = () => {
	  gameboard.init();
	  currentPlayer = player1.getSymbol();
	  gameOver = false;
	  playGame();
	};
  
	const playGame = () => {
	  while (!gameOver) {
		console.log("Current player:", currentPlayer);
  
		gameboard.getBoard();
		const position = prompt(
		  `Player ${currentPlayer}, enter a position (0-8): `
		);
		gameboard.displayTable();
		gameboard.makeMove(currentPlayer, parseInt(position, 10));
		checkGameStatus();
		currentPlayer =
		  currentPlayer === player1.getSymbol()
			? player2.getSymbol()
			: player1.getSymbol();
	  }
	};
	const checkGameStatus = () => {
	  const board = gameboard.getBoard();
	  const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	  ];
  
	  let isDraw = true;
  
	  for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
		  console.log(`Player ${board[a]} wins!`);
		  gameOver = true;
		  break;
		}
	  }
  
	  for (let i = 0; i < board.length; i++) {
		if (board[i] === null) {
		  isDraw = false;
		  break;
		}
	  }
	  if (isDraw) {
		console.log("It's a draw!");
		gameOver = true;
	  }
	};
  
	return { startGame };
  })();