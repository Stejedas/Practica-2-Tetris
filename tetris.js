
// CONSTANTES DE BOARD_WIDTH Y BOARD_HEIGHT //
const board_width = 10;
const board_height = 20;


// FUNCION generateBoardBlock() //
// función sin parámetros de entrada que genera y devuelve la estructura HTML que representa un bloque de un tablero.

function generateBoardBlock(w,h) {
    const div_drawBoard = document.createElement('div');
    div_drawBoard.classList.add('drawBoard');
    div_drawBoard.classList.add(`${w},${h}`);
    const board_Block = document.getElementById('board_Block')
    board_Block.appendChild(div_drawBoard);

    const div_inside = document.createElement('div');
    div_inside.classList.add('div_inside');
    div_drawBoard.appendChild(div_inside);
    }


function drawBoard(containerClass, width, heigth) {


    const board_Block = document.createElement('div');
    board_Block.setAttribute('id','board_Block')
    board_Block.classList.add('boardBlock')
    document.body.appendChild(board_Block);

    for(let w = 0; w < width; w++){
        for(let h = 0; h < heigth; h++ ){
            generateBoardBlock(w,h); 
            }
        }
};

// pintamos la tabla //
drawBoard('clase', board_width, board_height);





// TETROMINOES //

const tetromino_I = [
    [0, 1, 2 , 3],
    [board_width, board_width+1, board_width*2+1, board_width*3+1],
    [0, 1, 2 , 3],
    [board_width, board_width+1, board_width*2+1, board_width*3+1]
]

const tetromino_L = [
    [1,2,board_width+1,board_width*2+1],
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
    [1,board_width,board_width+1,board_width+2],
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
    [0,1,board_width,board_width+1],
    [0,1,board_width,board_width+1],
    [0,1,board_width,board_width+1],
    [0,1,board_width,board_width+1],
]

const allTetrominoes = [tetromino_0,tetromino_I,tetromino_J,tetromino_L,tetromino_S,tetromino_T,tetromino_Z]

 

const variable = document.querySelectorAll('.drawBoard');


console.log(variable[0]);
console.log(variable[1]);
console.log(variable[2]);
console.log(variable[3]);

variable.forEach( e => {

})

let currentPosition = 4; //
let currentRotation = 0;
let random = Math.floor(Math.random() * 7);

let currentTetrominoe;

function generateRandomTetrominoe(){
    let tetromine = {
        positionAtTetrominoeList: random,
       
        piece: allTetrominoes[random],
        position: 4,
        rotation: 0
    };
    return currentTetrominoe = tetromine
}


generateRandomTetrominoe();
console.log(currentTetrominoe)
generateRandomTetrominoe()