fetch("https://repllistserver.voidvenom.repl.co/repls").then(response => {
	return response.json();
}).then(json => {
	console.log(json);
});