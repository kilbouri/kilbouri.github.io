let months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
let repo_table = document.getElementById("repo_table");
let repo_template = document.getElementById("repo_template");

function add_repo(repo_json) {
	let new_clone = repo_template.content.cloneNode(true);

	// set the repo name
	let name = repo_json.name;
	new_clone.querySelector(".repo-name").innerHTML = name ? name : "Un-named Repository";

	// set the repo link
	let url = repo_json.html_url;
	new_clone.querySelector(".repo-link").href = url;

	// set the repo description
	let description = repo_json.description;
	new_clone.querySelector(".repo-desc").innerHTML = description ? description : "No description";

	// set the repo's last push date and time
	let last_push = new Date(repo_json.pushed_at);
	let time = last_push.getHours() % 12 + ":" + String(last_push.getMinutes()).padEnd(2, "0") + ((last_push.getHours() > 12) ? "pm" : "am");
	let date = months[last_push.getMonth()] + " " + (last_push.getDay() + 1) + ", " + last_push.getFullYear();
	new_clone.querySelector(".repo-push").innerHTML = "Last pushed to at " + time + " on " + date;

	// append the repo to the grid
	repo_table.appendChild(new_clone);
}

// fetch my repo list from the GitHub API
fetch("https://api.github.com/users/kilbouri/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
	  json.forEach(element => {
		  add_repo(element);
	  });
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });