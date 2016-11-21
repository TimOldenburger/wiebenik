var x;

var klas = document.getElementsByClassName('fa2');

function menuHide() {
	var elem = document.getElementById('menuhide');
	if (x) {
		elem.style.visibility = "visible";
		klas['a'].style.visibility = "hidden";
		klas['b'].style.visibility = "hidden";
		klas['c'].style.visibility = "hidden";
		klas['d'].style.visibility = "hidden";
		x = false;
	} else {
		elem.style.visibility = "hidden";
		klas['a'].style.visibility = "visible";
		klas['b'].style.visibility = "visible";
		klas['c'].style.visibility = "visible";
		klas['d'].style.visibility = "visible";
		window.location.href = "t-rex-runner/index.html";
		x = true;
	}
}

function showIcons() {
	klas['a'].style.visibility = "visible";
	klas['b'].style.visibility = "visible";
	klas['c'].style.visibility = "visible";
	klas['d'].style.visibility = "visible";
}