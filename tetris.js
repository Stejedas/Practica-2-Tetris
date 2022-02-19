
// CONSTANTES DE BOARD_WIDTH Y BOARD_HEIGHT //
const board_width = 10;
const board_height = 20;


// FUNCION generateBoardBlock() //
// función sin parámetros de entrada que genera y devuelve la estructura HTML que representa un bloque de un tablero.

// AUDIOS //
/**
 * drawBoard(containerClass, width, heigth): función que genera dentro del contenedor definido en containerClass (string) todos los bloques de hijos necesarios para cumplir con el width (number) y el height (number). Por ejemplo si tenemos 10 de width y 20 de height tendrá que generar 200 bloques de tablero dentro del contenedor. Esta función la podremos utilizar para pintar tanto el board general como el mini-board de previsualización de la siguiente pieza
 */

function drawBoard(containerClass, width, heigth) {


    const board_Block = document.createElement('div');
    board_Block.setAttribute('id', 'board_Block')
    board_Block.classList.add('boardBlock')
    document.body.appendChild(board_Block);
    for (let i = 0; i < width * heigth; i++) {

        const div_drawBoard = document.createElement('div');
        div_drawBoard.classList.add('drawBoard');
        div_drawBoard.classList.add(`${containerClass}${i}`);
        const board_Block = document.getElementById('board_Block')
        board_Block.appendChild(div_drawBoard);

        const div_inside = document.createElement('div');
        div_inside.classList.add('div_inside');
        div_drawBoard.appendChild(div_inside);

    };
    for (let i = 0; i < width; i++) {
        const div_finalBoard = document.createElement('div');
        div_finalBoard.classList.add(`${containerClass}20${i}`);
        div_finalBoard.classList.add("finalTable");

        board_Block.appendChild(div_finalBoard);

    }


};

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

let currentRotation = 0;
let newTetrominoe = false;

let currentTetrominoe// tetromino ACTUAL //

// GENERADOR DE TETROMINO ALEATORIO //
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

// PINTAR CELDA CON ESTILO
function drawTetrominoeInMainBoard() {
    console.log(currentTetrominoe.piece)
    console.log(currentTetrominoe.position)
    currentTetrominoe.piece[currentTetrominoe.rotation].forEach(e => {

        const ficha = document.querySelector(`.Grande${e + currentTetrominoe.position}`)
        ficha.classList.add('dark')
    })
}

// BORRAR CELDA CON ESTILO 
function undrawTetrominoeInMainBoard() {
    const undraw = document.querySelectorAll('.dark')
    undraw.forEach(e => e.classList.remove('dark'));
}

// FUNCION MOVIMIENTO ABAJO
function moveDown() {

    function finishTable(elemento, indice, arrreglo) {
        const test = document.querySelector(`.Grande${elemento + currentTetrominoe.position + board_width}`).classList.contains('finalTable');
        console.log(test)
        return test;
    }
    let comprobacionFinaltabla = currentTetrominoe.piece[currentTetrominoe.rotation].some(finishTable);

    function tableroOcupado(elemento, indice, arrreglo) {
        const test = document.querySelector(`.Grande${elemento + currentTetrominoe.position + board_width}`).classList.contains('fixed_tab');
        console.log(test)
        return test;
    }
    let comprobacionOcupada = currentTetrominoe.piece[currentTetrominoe.rotation].some(tableroOcupado);



    if (comprobacionFinaltabla === true || comprobacionOcupada === true) {
        //


        const undraw = document.querySelectorAll('.dark')
        undraw.forEach(e => e.classList.remove('dark'));
        undraw.forEach(e => e.classList.add('fixed_tab'))
        const audioLand = new Audio('assets/samples_land.mp3');
        audioLand.play();

        //
        const tableroOcupado = (e) => e + currentTetrominoe.position < 10;
        let finalArriba = currentTetrominoe.piece[currentTetrominoe.rotation].some(tableroOcupado);

        console.log(finalArriba);


        if (finalArriba === true) {
            

            const audioGameOver = new Audio('assets/samples_gameover.mp3');
           audioGameOver.play();
            window.clearInterval(intervalo);
            !alert("Game Over")

        } else {
        generateRandomTetromine();
        drawTetrominoeInMainBoard()
        }
       
    } else {
        undrawTetrominoeInMainBoard();
        currentTetrominoe.position += board_width;
        const audioMove = new Audio('assets/samples_move.mp3');
        audioMove.play();
        drawTetrominoeInMainBoard();

    }
}

// FUNCION ROTACION
function rotate() {
    let comprobarLimiteTabla1;
    function limiteTabla1(elemento, indice, arrreglo) {
        console.log(elemento + currentTetrominoe.position)
        return (elemento + currentTetrominoe.position + 1) % 10 != 0 ? true : false;
    }
    comprobarLimiteTabla1 = currentTetrominoe.piece[currentTetrominoe.rotation].every(limiteTabla1);
   

    let comprobarLimiteTabla2;
    function limiteTabla2(elemento, indice, arrreglo) {
        return (elemento + currentTetrominoe.position) % 10 != 0 ? true : false;
    }
    comprobarLimiteTabla2 = currentTetrominoe.piece[currentTetrominoe.rotation].every(limiteTabla2);
   
    if (comprobarLimiteTabla1 === true && comprobarLimiteTabla2 === true) {

    undrawTetrominoeInMainBoard();

    if (currentTetrominoe.rotation === 3) {

        currentTetrominoe.rotation = 0;

        function tableroOcupado(elemento, indice, arrreglo) {

            const test = document.querySelector(`.Grande${elemento + currentTetrominoe.position}`).classList.contains('fixed_tab');
            console.log(test)
            return test;
    
        }
        let comprobacionOcupada = currentTetrominoe.piece[currentTetrominoe.rotation].some(tableroOcupado);
        
        if(comprobacionOcupada === true){
            currentTetrominoe.rotation = 0;
        } else {
            currentTetrominoe.rotation === 3
        }

    } else {
        currentTetrominoe.rotation++;
        function tableroOcupado(elemento, indice, arrreglo) {

            const test = document.querySelector(`.Grande${elemento + currentTetrominoe.position}`).classList.contains('fixed_tab');
            console.log(test)
            return test;
    
        }
        let comprobacionOcupada = currentTetrominoe.piece[currentTetrominoe.rotation].some(tableroOcupado);
        
        if(comprobacionOcupada === true){
            currentTetrominoe.rotation = currentTetrominoe.rotation;
        } else {
            currentTetrominoe.rotation -1
        }
    }
    const audioRotate = new Audio('assets/samples_rotate.mp3');
    audioRotate.play();


    drawTetrominoeInMainBoard()
    }
}
// INTERVALO DE BAJADA
let intervalo = setInterval(moveDown, 800); 

// FUNCION MOVIMIENTO DERECHA
function moveRight() {

    // FUNCION QUE LIMITA POR LA DERECHA EL MOVIMIENTO
    let comprobarLimiteTabla;
    function limiteTabla(elemento, indice, arrreglo) {
        console.log(elemento + currentTetrominoe.position)
        return (elemento + currentTetrominoe.position + 1) % 10 != 0 ? true : false;
    }
    comprobarLimiteTabla = currentTetrominoe.piece[currentTetrominoe.rotation].every(limiteTabla);
    console.log(comprobarLimiteTabla)

    // LIMITE COLOR 
    function tableroOcupado(elemento, indice, arrreglo) {

        const test = document.querySelector(`.Grande${elemento + currentTetrominoe.position + 1}`).classList.contains('fixed_tab');
        console.log(test)
        return test;

    }
    let comprobacionOcupada = currentTetrominoe.piece[currentTetrominoe.rotation].some(tableroOcupado);

    if (comprobarLimiteTabla === true && comprobacionOcupada === false) {
        currentTetrominoe.position++
        audioMove.play();
    }

}

// FUNCION MOVIMIENTO IZQUIERDA
function moveLeft() {
    let comprobarLimiteTabla;
    function limiteTabla(elemento, indice, arrreglo) {
        return (elemento + currentTetrominoe.position) % 10 != 0 ? true : false;
    }
    comprobarLimiteTabla = currentTetrominoe.piece[currentTetrominoe.rotation].every(limiteTabla);
    console.log(comprobarLimiteTabla)

    // LIMITE COLOR 
    function tableroOcupado(elemento, indice, arrreglo) {


        const test = document.querySelector(`.Grande${elemento + currentTetrominoe.position - 1}`).classList.contains('fixed_tab');
        console.log(test)
        return test;


    }
    let comprobacionOcupada = currentTetrominoe.piece[currentTetrominoe.rotation].some(tableroOcupado);

    if (comprobarLimiteTabla === true && comprobacionOcupada === false) {
        currentTetrominoe.position--
        audioMove.play();
    }

}

// LLAMADA EVENTOS //
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

// const audioPlay = new Audio('assets/assets_theme1.mp3');
// audioPlay.loop = true;
// audioPlay.play();

function playGame() {
    generateRandomTetromine();
    drawTetrominoeInMainBoard()
    
}

playGame();