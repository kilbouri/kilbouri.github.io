function getTheme() {
	const pref = window.localStorage.getItem('theme');
	if (pref == null) {
		// First-time setup
		window.localStorage.setItem('theme', 'dark');
		console.log('Theme was not found, setting dark and returning true');
		return true;
	}
	console.log('Theme was ' + pref);
	return pref == 'dark';
}

function setTheme(theme) {
	// get light and dark styles
	let lightsheet = document.getElementById('light-theme').sheet;
	let darksheet = document.getElementById('dark-theme').sheet;

	// enable/disable appropriately
	lightsheet.disabled = theme;
	darksheet.disabled = !theme;

	// replace label on button
	document.getElementById('swap-theme-link').innerHTML = (theme ? 'Light' : 'Dark') + ' Mode';

	// update local storage to reflect new theme
	window.localStorage.setItem('theme', theme ? 'dark' : 'light');
}

function swapTheme() {
	dark = getTheme();
	setTheme(!dark);
}

// once the script has loaded, load the user's theme
setTheme(getTheme());