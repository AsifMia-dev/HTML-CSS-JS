function openPlayerConfig(event){
    editPlayer = +event.target.dataset.playerid; //+ will convert the string into number "1" => 1
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display='block';
}
function closePlayerConfig(){
     playerConfigOverlayElement.style.display = 'none';
     backdropElement.style.display='none';
     formElement.firstElementChild.classList.remove('error');
     errorsOutputElement.textContent = '';
     formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    
    const formData = new FormData(event.target);
    console.log(formData);
    const enteredPlayerName = formData.get('playername').trim(); 
    console.log(enteredPlayerName);
    if(!enteredPlayerName){ // enteredPlayername === ''
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }
    console.log(editPlayer);
    const pickPlayer = 'player-'+editPlayer+'-data';
    console.log(pickPlayer);
    const updatedPlayerDataElement = document.getElementById('player-' + editPlayer + '-data');
    console.log(updatedPlayerDataElement);
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
    player[editPlayer-1].name = enteredPlayerName;
    closePlayerConfig();



} 