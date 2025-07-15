function resetGameStatus(){
    activePlayer = 0;
    currentRound =1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML = 'You won! <span id="winner-name">PLAYER NAME</span>';
    gameOverElement.style.display = 'none';
    let gameBoardIndex = 0;
    for(let i = 0; i<3 ; i++){
        for(let j = 0; j<3; j++){
            gameData[i][j] = 0;
            gameBoardElement.children[gameBoardIndex].textContent = '';
            gameBoardElement.children[gameBoardIndex].classList.remove('disable');
            gameBoardIndex++;
        }
    }
}

function startNewGame(){
    if(player[0].name === '' || player[1].name === ''){
        alert('Please set custom player names for both players!')
        return;
    } 
    resetGameStatus();
    gameAreaEelement.style.display = 'block';
    activePlayerNameElement.textContent = player[activePlayer].name;
}

function switchPlayer(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     activePlayerNameElement.textContent = player[activePlayer].name;
}
function selectGameField(event){
    if(event.target.tagName !== 'LI' || gameIsOver){
        return;
    }
    const selectedColumn = event.target.dataset.col -1;
    const selectedRow = event.target.dataset.row -1;
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please select an empty field!');
        return;
    } 
    event.target.textContent = player[activePlayer].symbol;
    event.target.classList.add('disable');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
   
    const winnerId = checkForGameOver();

    if(winnerId !== 0){
        endGame(winnerId);
    }
    currentRound++;
    switchPlayer();
} 
function checkForGameOver(){
    if(gameData[0][0] > 0 && gameData[0][0] == gameData[1][1] && gameData[1][1] === gameData[2][2]){
        return gameData[0][0];
    }
    if(gameData[0][2] > 0 && gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0]){
        return gameData[0][2];
    }
    //cheking rows
    for(let i = 0; i<3; i++){
        if(gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]){
            return gameData[i][0];
        }
    }
    for(let i = 0; i < 3; i++){
        if(gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i]){
            return gameData[0][i];
        }
    }

    if(currentRound === 9){
        return -1;
    }
    return 0;
}

function endGame(winnerId){
    gameIsOver = true;
    gameOverElement.style.display = 'block';
    if(winnerId >0){
        const winnerName = player[winnerId -1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    }else{
         gameOverElement.firstElementChild.firstElementChild.textContent = 'It\'s a draw!'

    }
}
