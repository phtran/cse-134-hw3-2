function deletePlayerByName(player) {
    return player.firstName == document.getElementById('editFristName') && player.lastName == document.getElementById('editLastName');
}

function deletePlayer() {
    console.log(JSON.parse(window.localStorage['players']));
    //goToPage('/Bootstrap/statsplayers.html')
}