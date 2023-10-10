const startBtn = document.querySelector('.button__start-game');
const resetBtn = document.querySelector('.button__reset-game');
const tablo = document.querySelector('.tablo');
const userName = document.querySelector('.user-name');
const secondUserName = document.querySelector('.second-user-name');
const userScore = document.querySelector('.score1');
const secondUserScore = document.querySelector('.score2');
const text = document.querySelector('.text');
const gameField = document.querySelector('.game');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.button');
const body = document.querySelector('body');
const winnerNameNode = document.querySelector('.winner-name');
const winnerFigureNode = document.querySelector('.figure-item');
const moveNumberNode = document.querySelector('.move-number');
const historyListNode = document.querySelector('.history-list');
const amountOfGames = document.querySelector('.games');

let motion = 0;
let cells;
let user;
let secondUser;
let userScoreCount = 0;
let secondPlayerScoreCount = 0;
let winner;
let winFigure;
let winnerItem;
const winnersList = [];

const playClick = () => {
  const soundClick = new Audio('assets/sound/click.mp3');
  soundClick.play();
};

const playWin = () => {
  const soundWin = new Audio('assets/sound/win.mp3');
  soundWin.play();
};

const getCells = () => {
  cells = document.querySelectorAll('.cell');
};

const renderUserName = () => {
  user = prompt('Enter your name, please!');
  userName.textContent = `${user}: `;
  userScore.textContent = userScoreCount;
  secondUser = prompt(`Enter second plaeyr's name, please!`);
  secondUserName.textContent = `${secondUser}`;
  secondUserScore.textContent = secondPlayerScoreCount;
};
const changeScore = () => {
  userScore.textContent = userScoreCount;
  secondUserScore.textContent = secondPlayerScoreCount;
};

const startGame = () => {
  renderUserName();
  tablo.classList.remove('hidden');
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameField[i] = gameField.appendChild(cell);
  }
  text.textContent = 'have a nice game !!!';
  status = 'play';
  startBtn.removeEventListener('click', startGame);
  startBtn.classList.add('hidden');
  getCells();
};

const resetGame = () => {
  cells.forEach((cell) => {
    cell.textContent = '';
    motion = 0;
  });
};

const addXisWinner = () => {
  const winnerItem = new Object();
  winnerItem.winner = user;
  winnerItem.move = motion;
  if (winnersList.length < 10) winnersList.push(winnerItem);
};
const add0isWinner = () => {
  const winnerItem = new Object();
  winnerItem.winner = secondUserName.textContent;
  winnerItem.move = motion;
  if (winnersList.length < 10) winnersList.push(winnerItem);
};
const saveGameResults = () => {
  localStorage.setItem('results10', JSON.stringify(winnersList));
};
// saveGameResults();
const renderModalContent = () => {
  winnerFigureNode.textContent = `  ${winFigure} !`;
  moveNumberNode.textContent = `The victory was won on the  ${motion}  move!`;
  winnerNameNode.textContent = `  ${winner}  `;
};
const showModal = () => {
  renderModalContent();
  modal.classList.add('show');
  body.classList.add('not-scroll');
};
const closeModal = () => {
  modal.classList.remove('show');
  body.classList.add('not-scroll');
};
const checkWinner = () => {
  if (
    cells[0].innerHTML === 'x' &&
    cells[1].innerHTML === 'x' &&
    cells[2].innerHTML === 'x'
  ) {
    userScoreCount++;
    winner = user;
    winFigure = 'X';
    playWin();
    showModal();
    addXisWinner();
    resetGame();
  }

  if (
    cells[3].innerHTML === 'x' &&
    cells[4].innerHTML === 'x' &&
    cells[5].innerHTML === 'x'
  ) {
    userScoreCount++;
    winner = user;
    winFigure = 'X';
    playWin();
    showModal();
    addXisWinner();
    resetGame();
  }
  if (
    cells[6].innerHTML === 'x' &&
    cells[7].innerHTML === 'x' &&
    cells[8].innerHTML === 'x'
  ) {
    userScoreCount++;
    winner = user;
    winFigure = 'X';
    playWin();
    showModal();
    addXisWinner();
    resetGame();
  }
  if (
    cells[0].innerHTML === 'x' &&
    cells[4].innerHTML === 'x' &&
    cells[8].innerHTML === 'x'
  ) {
    userScoreCount++;
    winner = user;
    winFigure = 'X';
    playWin();
    showModal();
    addXisWinner();
    resetGame();
  }
  if (
    cells[2].innerHTML === 'x' &&
    cells[4].innerHTML === 'x' &&
    cells[6].innerHTML === 'x'
  ) {
    userScoreCount++;
    winner = user;
    winFigure = 'X';
    playWin();
    showModal();
    addXisWinner();
    resetGame();
  }
  if (
    cells[0].innerHTML === 'x' &&
    cells[3].innerHTML === 'x' &&
    cells[6].innerHTML === 'x'
  ) {
    userScoreCount++;
    winner = user;
    winFigure = 'X';
    playWin();
    showModal();
    addXisWinner();
    resetGame();
  }

  if (
    cells[1].innerHTML === 'x' &&
    cells[4].innerHTML === 'x' &&
    cells[7].innerHTML === 'x'
  ) {
    userScoreCount++;
    winner = user;
    winFigure = 'X';
    playWin();
    showModal();
    addXisWinner();
    resetGame();
  }
  if (
    cells[2].innerHTML === 'x' &&
    cells[5].innerHTML === 'x' &&
    cells[8].innerHTML === 'x'
  ) {
    userScoreCount++;
    winner = user;
    winFigure = 'X';
    playWin();
    showModal();
    addXisWinner();
    resetGame();
  }

  // 0 win

  if (
    cells[0].innerHTML === 'o' &&
    cells[1].innerHTML === 'o' &&
    cells[2].innerHTML === 'o'
  ) {
    secondPlayerScoreCount++;
    playWin();
    winner = secondUser;
    winFigure = '0';
    showModal();
    add0isWinner();
    resetGame();
  }
  if (
    cells[3].innerHTML === 'o' &&
    cells[4].innerHTML === 'o' &&
    cells[5].innerHTML === 'o'
  ) {
    secondPlayerScoreCount++;
    playWin();
    winner = secondUser;
    winFigure = '0';
    showModal();
    add0isWinner();
    resetGame();
  }
  if (
    cells[6].innerHTML === 'o' &&
    cells[7].innerHTML === 'o' &&
    cells[8].innerHTML === 'o'
  ) {
    secondPlayerScoreCount++;
    playWin();
    winner = secondUser;
    winFigure = '0';
    showModal();
    add0isWinner();
    resetGame();
  }
  if (
    cells[0].innerHTML === 'o' &&
    cells[4].innerHTML === 'o' &&
    cells[8].innerHTML === 'o'
  ) {
    secondPlayerScoreCount++;
    playWin();
    winner = secondUser;
    winFigure = '0';
    showModal();
    add0isWinner();
    resetGame();
  }
  if (
    cells[2].innerHTML === 'o' &&
    cells[4].innerHTML === 'o' &&
    cells[6].innerHTML === 'o'
  ) {
    secondPlayerScoreCount++;
    playWin();
    winner = secondUser;
    winFigure = '0';
    showModal();
    add0isWinner();
    resetGame();
  }
  if (
    cells[0].innerHTML === 'o' &&
    cells[3].innerHTML === 'o' &&
    cells[6].innerHTML === 'o'
  ) {
    secondPlayerScoreCount++;
    playWin();
    winner = secondUser;
    winFigure = '0';
    showModal();
    add0isWinner();
    resetGame();
  }
  if (
    cells[1].innerHTML === 'o' &&
    cells[4].innerHTML === 'o' &&
    cells[7].innerHTML === 'o'
  ) {
    secondPlayerScoreCount++;
    playWin();
    winner = secondUser;
    winFigure = '0';
    showModal();
    add0isWinner();
    resetGame();
  }
  if (
    cells[2].innerHTML === 'o' &&
    cells[5].innerHTML === 'o' &&
    cells[8].innerHTML === 'o'
  ) {
    secondPlayerScoreCount++;
    playWin();
    winner = secondUser;
    winFigure = '0';
    showModal();
    add0isWinner();
    resetGame();
  }
  changeScore();
  saveGameResults();
};

const showRecords = () => {
  const dataRecords = JSON.parse(localStorage.getItem('results10'));
  const totalGames = dataRecords !== null ? dataRecords.length : 0;
  amountOfGames.textContent = ` ${totalGames} `;
  if (dataRecords) {
    dataRecords.forEach((players, index) => {
      historyListNode.innerHTML += `<li class = "history-list-item"> ${players.winner} won on ${players.move} move</li>`;
    });
  }
};

showRecords();

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
gameField.addEventListener('click', (event) => {
  if (event.target.textContent === '') {
    if (motion % 2 === 0) {
      event.target.textContent = 'x';
      motion++;
      playClick();
      checkWinner();
      saveGameResults();
    } else {
      event.target.textContent = 'o';
      motion++;
      playClick();
      checkWinner();
      saveGameResults();
    }
  }
});
closeBtn.addEventListener('click', closeModal);
