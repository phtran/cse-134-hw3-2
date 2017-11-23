function savePlayer() {
    // might want to validate user input here
    let player = {
        firstName: document.getElementById('inputFirstName').value,
        lastName: document.getElementById('inputLastName').value,
        email: document.getElementById('inputEmail').value,
        birthday: document.getElementById('inputBirth').value,
        jerseyNumber: document.getElementById('inputJersey').value,
        position: document.getElementById('inputPosition').value,
        captain: document.getElementById('inputCaptain').value
    }
    var addPlayer = JSON.parse(window.localStorage['players']);
    addPlayer.push(player);
    window.localStorage.setItem('players', JSON.stringify(addPlayer));    
    
    let elmt = document.createElement('p');
    let text = document.createTextNode('player added successfully');
    elmt.appendChild(text);
    document.getElementById("result").appendChild(elmt);
    //window.location.assign('../Bootstrap/statsPlayers.html');    
}
