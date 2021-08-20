const icon_source = 'https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons';
const language_overrides = {
	python3: 'python',
	python2: 'python',
};

function get_language_url(lang) {
	let langName = get_language_name(lang);
	if (langName) return `${icon_source}/${langName}.svg`;
	else return '';
}

function get_language_name(lang) {
	lang = String(lang);
	if (lang == 'null' || lang == 'undefined') return '';

	lang = lang.replace('#', 'sharp');
	lang = lang.toLowerCase();
	if (lang in language_overrides) return language_overrides[lang];

	return lang;
}
