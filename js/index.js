window.onload = () => {};

const startBtn = document.querySelector('.button__start-game');
const resetBtn = document.querySelector('.button__reset-game');
const userName = document.querySelector('.user-name');
const text = document.querySelector('.text');
const gameField = document.querySelector('.game');

let motion = 0;
let cells;
let user;

const getCells = () => {
  cells = document.querySelectorAll('.cell');
};

const renderUserName = () => {
  user = prompt('Enter your name, please!');
  userName.textContent = user;
};

const startGame = () => {
  renderUserName();

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

const checkWinner = () => {
  if (
    cells[0].innerHTML === 'x' &&
    cells[1].innerHTML === 'x' &&
    cells[2].innerHTML === 'x'
  )
    alert('X is winner!!!');
  if (
    cells[3].innerHTML === 'x' &&
    cells[4].innerHTML === 'x' &&
    cells[5].innerHTML === 'x'
  )
    alert('X is winner!!!');
  if (
    cells[6].innerHTML === 'x' &&
    cells[7].innerHTML === 'x' &&
    cells[8].innerHTML === 'x'
  )
    alert('X is winner!!!');
  if (
    cells[0].innerHTML === 'x' &&
    cells[4].innerHTML === 'x' &&
    cells[8].innerHTML === 'x'
  )
    alert('X is winner!!!');
  if (
    cells[2].innerHTML === 'x' &&
    cells[4].innerHTML === 'x' &&
    cells[6].innerHTML === 'x'
  )
    alert('X is winner!!!');

  if (
    cells[0].innerHTML === 'o' &&
    cells[1].innerHTML === 'o' &&
    cells[2].innerHTML === 'o'
  )
    alert('O is winner!!!');
  if (
    cells[3].innerHTML === 'o' &&
    cells[4].innerHTML === 'o' &&
    cells[5].innerHTML === 'o'
  )
    alert('O is winner!!!');
  if (
    cells[6].innerHTML === 'o' &&
    cells[7].innerHTML === 'o' &&
    cells[8].innerHTML === 'o'
  )
    alert('O is winner!!!');
  if (
    cells[0].innerHTML === 'o' &&
    cells[4].innerHTML === 'o' &&
    cells[8].innerHTML === 'o'
  )
    alert('O is winner!!!');
  else if (
    cells[2].innerHTML === 'o' &&
    cells[4].innerHTML === 'o' &&
    cells[6].innerHTML === 'o'
  )
    alert('O is winner!!!');
  
};

const makeMove = (event) => {};

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
gameField.addEventListener('click', (event) => {
  motion++;
  motion % 2 !== 0
    ? (event.target.textContent = 'x')
    : (event.target.textContent = 'o');
  checkWinner();
});
