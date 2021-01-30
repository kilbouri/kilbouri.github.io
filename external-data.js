let months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
let repo_template = document.getElementById("repo_template");

function add_repo(parent, json) {
	let new_clone = repo_template.content.cloneNode(true);

	// set the repo name
	let name = json.name;
	new_clone.querySelector(".repo-name").innerHTML = name ? name : "Un-named Repository";
	
	// set the repo link
	let url = json.html_url;
	if (url != undefined)
		new_clone.querySelector(".repo-link").href = url;
	else
		new_clone.querySelector(".repo-link").target = "";
		
	// set the repo description
	let description = json.description;
	new_clone.querySelector(".repo-desc").innerHTML = description ? description : "No description";
	
	// set the repo's last push date and time
	if (json.pushed_at != undefined) {
		let last_push = new Date(json.pushed_at);
		let time = last_push.getHours() % 12 + ":" + String(last_push.getMinutes()).padEnd(2, "0") + ((last_push.getHours() > 12) ? "pm" : "am");
		let date = months[last_push.getMonth()] + " " + (last_push.getDay() + 1) + ", " + last_push.getFullYear();
		new_clone.querySelector(".repo-push").innerHTML = "Last updated at " + time + " on " + date;
	} else 
		new_clone.querySelector(".repo-push").innerHTML = "Failed to fetch date."
	
	// append the repo to the grid
	parent.appendChild(new_clone);
}

// fetch my repo list from the GitHub API
fetch("https://api.github.com/users/kilbouri/repos")
.then(function (response) {
	return response.json();
})
.then(function (json) {
	let repo_table = document.getElementById("repo_table");
	json.forEach(element => {
		add_repo(repo_table, element);
	});
})
.catch(function (error) {
	let repo_table = document.getElementById("repo_table");
	add_repo(repo_table, {
		name: "Unable to reach the GitHub API",
		html_url: undefined,
		description: "An unexpected error occurred while fetching my repositories from GitHub. Please try again in a few seconds.",
		last_push: undefined
	});

	console.log("GitHub Fetch Error: " + error);
});

// fetch my cached repl list from the repl server
fetch("https://repllistserver.voidvenom.repl.co/repls")
.then(response => {
	return response.json();
})
.then(json => {
	let items = json.data.userByUsername.publicRepls.items;
	items.forEach(repl => {
		// translate the fetched json to the github format
		let translated = {
			name: repl.title,
			html_url: "https://repl.it" + repl.url,
			description: repl.description,
			pushed_at: repl.timeUpdated
		};
		let repl_table = document.getElementById("repl_table");
		add_repo(repl_table, translated);	
	});
})
.catch(function (error) {
	let repl_table = document.getElementById("repl_table");
	add_repo(repl_table, {
		name: "Unable to fetch the repl list",
		html_url: undefined,
		description: "An unexpected error occurred while fetching my repls from my repl list server. Please try again in a few seconds.",
		last_push: undefined
	});

	console.log("Repl Fetch Error: " + error);
});