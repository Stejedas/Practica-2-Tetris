
// CONSTANTES DE BOARD_WIDTH Y BOARD_HEIGHT //
const board_width = 10;
const board_height = 20;

//CONSTANTES DE SCORE_WIDTH Y SCORE_HEIGHT//

const score_width = 4;
const score_height = 4;


// FUNCION generateBoardBlock() //
// función sin parámetros de entrada que genera y devuelve la estructura HTML que representa un bloque de un tablero.

function generateBoardBlock(ind) {

}
const container = document.createElement('div');
container.className = ('container');
document.body.appendChild(container);

/**
 * drawBoard(containerClass, width, heigth): función que genera dentro del contenedor definido en containerClass (string) todos los bloques de hijos necesarios para cumplir con el width (number) y el height (number). Por ejemplo si tenemos 10 de width y 20 de height tendrá que generar 200 bloques de tablero dentro del contenedor. Esta función la podremos utilizar para pintar tanto el board general como el mini-board de previsualización de la siguiente pieza
 */
function drawBoard(containerClass, width, heigth) {


    const board_Block = document.createElement('div');
    board_Block.setAttribute('id', 'board_Block')
    board_Block.classList.add('boardBlock')


    container.appendChild(board_Block);
   

    for (let i = 0; i < width * heigth; i++) {

        const div_drawBoard = document.createElement('div');
        div_drawBoard.classList.add('drawBoard');
        div_drawBoard.classList.add(`${containerClass}${i}`);
        const board_Block = document.getElementById('board_Block')
        board_Block.appendChild(div_drawBoard);

        const div_inside = document.createElement('div');
        div_inside.classList.add('div_inside');
        div_drawBoard.appendChild(div_inside);

    }
}
;

function scoreBoard(containerClass, width, heigth) {


    const scoreContainer = document.createElement('div');
    scoreContainer.className = ('score_container');
    container.appendChild(scoreContainer);

    const textScore = document.createElement('p');
    textScore.textContent = "Score";
    scoreContainer.appendChild(textScore);

    const Counter = document.createElement('div');
    Counter.className = ('score_counter');
    scoreContainer.appendChild(Counter);

    const nextPiece = document.createElement('div');
    nextPiece.className = ('next_piece_container');
    scoreContainer.appendChild(nextPiece);

    const directionsMove = document.createElement('p');
    directionsMove.textContent = "⬅ ⮕ ⬇ Move";
    scoreContainer.appendChild(directionsMove);

    const directionRotate = document.createElement('p');
    directionRotate.textContent = "⬆ Rotate";
    scoreContainer.appendChild(directionRotate);

    for (let i = 0; i < width * heigth; i++) {

        const div_scoreBoard = document.createElement('div');
        div_scoreBoard.classList.add('drawBoard');
        div_scoreBoard.classList.add(`${containerClass}${i}`);
        nextPiece.appendChild(div_scoreBoard)
        
      

        const divScore_inside = document.createElement('div');
        divScore_inside.classList.add('div_inside');
        div_scoreBoard.appendChild(divScore_inside);

    }
}

scoreBoard('Small', score_width, score_height)
// pintamos la tabla //
drawBoard('Grande', board_width, board_height);

const variable = document.querySelectorAll('.drawBoard');

// TETROMINOES //

const tetromino_I = [
    [0, 1, 2, 3],
    [1, board_width + 1, board_width * 2 + 1, board_width * 3 + 1],
    [0, 1, 2, 3],
    [1, board_width + 1, board_width * 2 + 1, board_width * 3 + 1]
]

const tetromino_L = [
    [0, 1, 2, board_width],
    [1, board_width + 1, board_width * 2 + 1, board_width * 2 + 2],
    [board_width, board_width + 1, board_width + 2, 2],
    [1, board_width + 1, board_width * 2 + 1, 0]
]

const tetromino_S = [
    [1, 2, board_width, board_width + 1],
    [1, board_width + 1, board_width + 2, board_width * 2 + 2],
    [1, 2, board_width, board_width + 1],
    [1, board_width + 1, board_width + 2, board_width * 2 + 2]
]

const tetromino_T = [
    [1, board_width, board_width + 1, board_width + 2],
    [1, board_width + 1, board_width * 2 + 1, board_width + 2],
    [board_width, board_width + 1, board_width + 2, board_width * 2 + 1],
    [1, board_width + 1, board_width * 2 + 1, board_width]
]

const tetromino_Z = [
    [0, 1, board_width + 1, board_width + 2],
    [2, board_width + 2, board_width + 1, board_width * 2 + 1],
    [0, 1, board_width + 1, board_width + 2],
    [2, board_width + 2, board_width + 1, board_width * 2 + 1]
]

const tetromino_J = [
    [1, board_width + 1, board_width * 2 + 1, board_width * 2],
    [board_width, board_width * 2, board_width * 2 + 1, board_width * 2 + 2],
    [1, 2, board_width + 1, board_width * 2 + 1],
    [board_width, board_width + 1, board_width + 2, board_width * 2 + 2]
]

const tetromino_0 = [
    [0, 1, board_width, board_width + 1],
    [0, 1, board_width, board_width + 1],
    [0, 1, board_width, board_width + 1],
    [0, 1, board_width, board_width + 1],
]

const allTetrominoes = [tetromino_0, tetromino_I, tetromino_J, tetromino_L, tetromino_S, tetromino_T, tetromino_Z]







// variable.forEach( e => { })


let currentRotation = 0;


let currentTetrominoe; // tetromino ACTUAL //

function generateRandomTetromine() {
    let random = Math.floor(Math.random() * 7)

    let RandomTetrominoe = {
        positionAtTetrominoeList: random,
        piece: allTetrominoes[random],
        position: 3,
        rotation: 0
    };

    return currentTetrominoe = RandomTetrominoe;

}
generateRandomTetromine();

function drawTetrominoeInMainBoard() {
    currentTetrominoe.piece[currentTetrominoe.rotation].forEach(e => {

        const ficha = document.querySelector(`.Grande${e + currentTetrominoe.position}`)
        ficha.classList.add('dark')
    })
}
drawTetrominoeInMainBoard()

function undrawTetrominoeInMainBoard() {
    const undraw = document.querySelectorAll('.dark')
    undraw.forEach(e => e.classList.remove('dark'));
}





function moveDown() {

    //COMPROBACION DEL FINAL DE TABLA
    let comprobacionFinalTable;
    function finaltabla(elemento, indice, arrreglo) {
        return (elemento + currentTetrominoe.position - 4 + board_width) <= 200;
    }
    comprobacionFinalTable = currentTetrominoe.piece[currentTetrominoe.rotation].every(finaltabla);

    //COMPROBAR SI HAY UNA CASILLA CON EL ESTILO ABAJO//  CUIDADO AL TOCAR ESTO !!!!!!!

    function finalOcupado(elemento, indice, arrreglo) {

        if (comprobacionFinalTable === true) {
            const test = document.querySelector(`.Grande${elemento + currentTetrominoe.position - 4 + board_width}`).classList.contains('dark');
            // console.log(test)
            return test === false;
        }


    }
    let comprobacionOcupada = currentTetrominoe.piece[currentTetrominoe.rotation].every(finalOcupado);

    // console.log(comprobacionOcupada)
    if (comprobacionFinalTable === true && comprobacionOcupada === true) {
        undrawTetrominoeInMainBoard();

        currentTetrominoe.position += board_width;

        drawTetrominoeInMainBoard()

    } else {
        clearInterval(intervalo);
    }


}

200

function rotate() {

    undrawTetrominoeInMainBoard();

    if (currentTetrominoe.rotation === 3) {
        currentTetrominoe.rotation = 0
    } else {
        currentTetrominoe.rotation++;
    }


    drawTetrominoeInMainBoard()

}

let intervalo = setInterval(moveDown, 400);


function moveRight() {

    // FUNCION QUE LIMITA POR LA DERECHA EL MOVIMIENTO
    let comprobarLimiteTabla;
    function limiteTabla(elemento, indice, arrreglo) {
        return (elemento + currentTetrominoe.position + 1) % 10 != 0 ? true : false;
    }
    comprobarLimiteTabla = currentTetrominoe.piece[currentTetrominoe.rotation].every(limiteTabla);
    console.log(comprobarLimiteTabla)

    if (comprobarLimiteTabla === true) {
        currentTetrominoe.position++
    }

    /* if(currentTetrominoe.positionAtTetrominoeList === 0 && currentTetrominoe.currentPosition%10 != 0){
         currentTetrominoe.position++
     } else if(currentTetrominoe.positionAtTetrominoeList === 1 && currentTetrominoe.currentPosition%10 != 0){
         currentTetrominoe.position++
     }*/
}

function moveLeft() {
    let comprobarLimiteTabla;
    function limiteTabla(elemento, indice, arrreglo) {
        return (elemento + currentTetrominoe.position) % 10 != 0 ? true : false;
    }
    comprobarLimiteTabla = currentTetrominoe.piece[currentTetrominoe.rotation].every(limiteTabla);
    console.log(comprobarLimiteTabla)

    if (comprobarLimiteTabla === true) {
        currentTetrominoe.position--
    }

}

window.addEventListener("keydown", e => {
    if (e.code === 'Space') {
        rotate();
    } else if (e.code === 'ArrowRight') {
        moveRight();
    } else if (e.code === 'ArrowDown') {
        moveDown();
    } else if (e.code === 'ArrowLeft') {
        moveLeft();
    }

})

