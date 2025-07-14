function startNewGame(){
    if(player[0].name === '' || player[1].name === ''){
        alert('Please set custom player names for both players!')
        return;
    } 
    gameAreaEelement.style.display = 'block';
    activePlayerNameElement.textContent = player[activePlayer].name;
}

function switchPlayer(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     activePlayerNameElement.textContent = player[activePlayer].name;
}
function selectGameField(event){
    if(event.target.tagName !== 'LI' || event.target.classList.contains('disable')){
        return;
    }
    event.target.textContent = player[activePlayer].symbol;
    event.target.classList.add('disable');
    const selectedColumn = event.target.dataset.col;
    const selectedRow = event.target.dataset.row;

    gameData[selectedRow][selectedColumn] = 

    switchPlayer();
}
