function deletePlayerByName(player) {
    return player.firstName === document.getElementById('editFirstName').value;
}

function deletePlayer() {
    let players = JSON.parse(window.localStorage['players']);
    let deleteIndex = players.findIndex(deletePlayerByName);
    players.splice(deleteIndex, 1);
    window.localStorage.setItem('players', JSON.stringify(players));    
    
    //goToPage('/Bootstrap/statsplayers.html')
}