
// CONSTANTES DE BOARD_WIDTH Y BOARD_HEIGHT //
const board_width = 10;
const board_height = 20;


// FUNCION generateBoardBlock() //
// función sin parámetros de entrada que genera y devuelve la estructura HTML que representa un bloque de un tablero.

function generateBoardBlock(ind) {

    }


/**
 * drawBoard(containerClass, width, heigth): función que genera dentro del contenedor definido en containerClass (string) todos los bloques de hijos necesarios para cumplir con el width (number) y el height (number). Por ejemplo si tenemos 10 de width y 20 de height tendrá que generar 200 bloques de tablero dentro del contenedor. Esta función la podremos utilizar para pintar tanto el board general como el mini-board de previsualización de la siguiente pieza
 */
function drawBoard(containerClass, width, heigth) {


    const board_Block = document.createElement('div');
    board_Block.setAttribute('id','board_Block')
    board_Block.classList.add('boardBlock')
    document.body.appendChild(board_Block);
    for(let i = 0; i < width*heigth; i++ ){
        
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

// pintamos la tabla //
drawBoard('Grande', board_width, board_height);

const variable = document.querySelectorAll('.drawBoard');

console.log(variable)

// TETROMINOES //

const tetromino_I = [
    [00, 01, 02 , 03],
    [1, board_width+1, board_width*2+1, board_width*3+1],
    [0, 1, 2 , 3],
    [1, board_width+1, board_width*2+1, board_width*3+1]
]

const tetromino_L = [
    [01,02,board_width+1,board_width*2+1],
    [board_width,board_width+1,board_width+2,board_width*2+2],
    [1,board_width+1,board_width*2+1,board_width*2],
    [board_width,board_width*2,board_height*2+1,board_width*2+2]
]

const tetromino_S = [
    [board_width+1,board_width+2,board_height*2,board_width*2+1],
    [0,board_width,board_width+1,board_width*2+1],
    [board_width+1,board_width+2,board_height*2,board_width*2+1],
    [0,board_width,board_width+1,board_width*2+1]
]

const tetromino_T = [
    [01,board_width,board_width+1,board_width+2],
    [1,board_width+1,board_width*2+1,board_width+2],
    [board_width,board_width+1,board_width+2,board_width*2+1],
    [1,board_width+1,board_width*2+1,board_width]
]

const tetromino_Z = [
    [board_width,board_width+1,board_width*2+1,board_width*2+2],
    [2,board_width+2,board_width+1,board_width*2+1],
    [board_width,board_width+1,board_width*2+1,board_width*2+2],
    [2,board_width+2,board_width+1,board_width*2+1]
]

const tetromino_J = [
    [1,board_width+1,board_width+2,board_width*2],
    [board_width,board_width*2,board_width*2+1,board_width*2+2],
    [1,2,board_width+1,board_width*2+1],
    [board_width,board_width+1,board_width+2,board_width*2+2]
]

const tetromino_0 =[
    [00,01,board_width,board_width+1],
    [0,1,board_width,board_width+1],
    [0,1,board_width,board_width+1],
    [0,1,board_width,board_width+1],
]

const allTetrominoes = [tetromino_0,tetromino_I,tetromino_J,tetromino_L,tetromino_S,tetromino_T,tetromino_Z]

 





// variable.forEach( e => { })

let currentPosition = 0;
let currentRotation = 0;
let random = Math.floor(Math.random()*7)

let currentTetrominoe;

function generateRandomTetromine() {
   

    let RandomTetrominoe = {
        
        positionAtTetrominoeList: random,
        piece: allTetrominoes[random],
        position: Math.floor(board_width/2),
        rotation: 0
    };

    return currentTetrominoe = RandomTetrominoe;
 
}


function drawTetrominoeInMainBoard(){
    const tetromino = generateRandomTetromine();
    console.log(tetromino)
    tetromino.piece[tetromino.rotation].forEach(e=> {
        console.log(e)
        
        const ficha = document.querySelector(`.Grande${e}`)
        ficha.classList.add('dark')
    
    })

}
drawTetrominoeInMainBoard()
