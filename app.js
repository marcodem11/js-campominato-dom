const selectElement = document.getElementById('options');
const playButton = document.getElementById('play');
const gridElement = document.querySelector('.grid')

const startGame = () => {
    console.log('Inizia il gioco');

    const options = (selectElement.value)
    let rows;
    let columns;
    let cellSize;
    console.log(options)

    switch(options) {
        case 'easy':
            rows = 10;
            columns = 10;
            break;
        case 'normal':
            rows = 9;
            columns = 9;
            break;
        case 'crazy':
            rows = 7;
            columns = 7;
            break;
        default:
            rows = 10;
            columns = 10;
    }

    const cellNumber = rows * columns;
    cellSize = `calc(100% / ${columns})`;
    console.log (rows, columns, cellNumber);

    gridElement.innerHTML = '';
    
    for( let i=0; i< cellNumber; i++) {
        const cell = document.createElement('div');
        cell.style.width = cellSize;
        cell.append(i + 1);
        cell.classList.add('cell');
        gridElement.appendChild(cell);
    }

    
function createBomb() {
    bombList = [];
    while (bombList.length < 16) {
      const bombNumber = getRandomInt(1, Math.pow(numberGrid, 2));
      if (!bombList.includes(bombNumber)) {
        bombList.push(bombNumber);
      }
    }
    console.log(bombList);
  }

}

function bombReveal() {
    let cells = document.getElementsByClassName('element');
    for (let i = 0; i < cells.length; i++) {
      if (bombList.includes(parseInt(cells[i].innerHTML))) {
        cells[i].classList.add('bomb');
        console.log(cells)
      }
    }
  }

  function selectThisGrid(event) {
    const squareWrapper = event.target;
    if (bombList.includes(parseInt(squareWrapper.innerHTML))) {
      squareWrapper.classList.add('bomb');
      endGameLose();
      bombReveal();
    } else if (!squareWrapper.classList.contains('selected')) {
      squareWrapper.classList.add('selected');
      score = score + 1;
      if (score == Math.pow(numberGrid, 2) - 16) {
        endGameWin();
        bombReveal();
      }
    }
    console.dir(squareWrapper);
  }

playButton.addEventListener('click', startGame);