window.onload = function() {
	document.getElementById('addBtn').onclick = function() {
		var ArrayData = [];
		var team = document.getElementById('inputTeam').value;
		var date = document.getElementById('inputDate').value;
		var location = document.getElementById('inputLocation').value;
		var home = document.getElementById('homeCheck');
		var away = document.getElementById('awayCheck');

		if (team == null || team == "" || date == null || location == null || location == "") {
			alert("Please fill in all the data.");
			return;
		}

		if (home.checked == false && away.checked == false) {
			alert("Please check a box.");
			return;
		}

		if (home.checked == true && away.checked == true) {
			alert("A team's game can't be both home and away at the same time.");
			return;
		}

		if (home.checked == true) {
			ArrayData = [team, date, location, true, false];
			var output = team + " " + date + " " + location + " Home";
			alert(output);
		}

		if (away.checked == true) {
			ArrayData = [team, date, location, false, true];
			var output = team + " " + date + " " + location + " Away";
			alert(output);
		}
	}
}