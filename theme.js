
/**
 * Reads the previously stored theme from the browser's local
 * storage.
 */
function readTheme() {
	const pref = window.localStorage.getItem('theme');
	if (pref == null) {
		// First-time setup
		writeTheme(true)
		return true;
	}
	return pref == 'dark';
}
/**
 * Writes the currently selected theme into the browser's local
 * storage.
 * @param theme true for dark, false for light
 */
function writeTheme(theme) {
	window.localStorage.setItem('theme', theme ? 'dark' : 'light');
}

/**
 * Activates the appropriate stylesheet and updates the text on
 * the toggle link.
 * @param theme true for dark, false for light 
 */
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
	selectedTheme = !selectedTheme;
	setTheme(selectedTheme);
}

// once the script has loaded, load the user's theme
let selectedTheme = readTheme();
setTheme(selectedTheme);

// write the active theme back to the localstorage when page unloads
window.onunload = writeTheme(selectedTheme);