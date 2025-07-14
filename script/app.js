const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
] 
let editPlayer = 0;
let activePlayer = 0;
const player = [
    {
        name:'',
        symbol:"X"
    },
    {
        name:'',
        symbol:"O"
    }
];

const playerConfigOverlayElement = document.getElementById('config-overlays');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-error');
const gameAreaEelement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');



const editplayer1Btn = document.getElementById('edit-player-1-btn');
const editplayer2Btn = document.getElementById('edit-player-2-btn');
const cancelConfigElement = document.getElementById('cencel-config-button');
const startGameBtn = document.getElementById('start-game-btn');
//const gameFieldElement = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');


editplayer1Btn.addEventListener('click',openPlayerConfig);
editplayer2Btn.addEventListener('click',openPlayerConfig);

cancelConfigElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);

startGameBtn.addEventListener('click',startNewGame);

// for(const gameField of gameFieldElement){
//     gameField.addEventListener('click',selectGameField);
// }

gameBoardElement.addEventListener('click',selectGameField);

