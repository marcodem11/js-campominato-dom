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

}

playButton.addEventListener('click', startGame);