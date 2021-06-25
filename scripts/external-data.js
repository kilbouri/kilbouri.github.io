let months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
let repo_template = document.getElementById('repo_template');
let language_overrides = {
  python3: 'python',
  python2: 'python',
};

function get_name(name, isFork) {
  if (isFork) return `${name} (fork)`;
  else return name;
}

function interpret_date(date) {
  if (date == undefined) return '';
  date = new Date(date);

  let h = String(date.getHours() % 12);
  let m = String(date.getMinutes()).padEnd(2, '0');
  let x = date.getHours() > 12 ? 'pm' : 'am';

  let D = date.getDay() + 1;
  let M = months[date.getMonth()];
  let Y = date.getFullYear();

  return `Last update: ${M} ${D}, ${Y} at ${h}:${m}${x}`;
}

function get_language_url(lang) {
  let langName = get_language_name(lang);
  if (langName) return `https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/${langName}.svg`;
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

function add_repo(parent, json) {
  let new_clone = repo_template.content.cloneNode(true);

  new_clone.querySelector('#repo-name').innerHTML = get_name(json.name, json.fork);
  new_clone.querySelector('#repo-link').href = json.html_url;
  new_clone.querySelector('#repo-desc').innerHTML = json.description;
  new_clone.querySelector('#repo-push').innerHTML = interpret_date(json.pushed_at);
  new_clone.querySelector('#repo-lang').src = get_language_url(json.language);
  new_clone.querySelector('#repo-lang').title = get_language_name(json.language);

  // append the repo to the grid
  parent.appendChild(new_clone);
}

// fetch my repo list from the GitHub API
get_request_json('https://api.github.com/users/kilbouri/repos')
  .then((json) => {
    remove_github_spinner();
    let repo_table = document.getElementById('repo_table');
    json.forEach((element) => add_repo(repo_table, element));
  })
  .catch((error) => {
    remove_github_spinner();
    add_repo(document.getElementById('repo_table'), get_error_card('GitHub'));
    console.log(`GitHub Fetch Error -> ${error}`);
  });

// fetch my cached repl list from the repl server
get_request_json('https://replcacheserver.voidvenom.repl.co/cache')
  .then((json) => {
    remove_repl_spinner();
    json.data.userByUsername.publicRepls.items.forEach((repl) => {
      add_repo(document.getElementById('repl_table'), {
        name: repl.title,
        html_url: `https://repl.it${repl.url}`,
        description: repl.description,
        pushed_at: repl.timeUpdated,
        language: repl.language,
        fork: false,
      });
    });
  })
  .catch((error) => {
    add_repo(document.getElementById('repl_table'), get_error_card('Repl Cache Server'));
    remove_repl_spinner();
    console.log(`Repl Fetch Error -> ${error}`);
  });

async function get_request_json(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

function get_error_card(source) {
  return {
    name: `Unable to reach ${source}`,
    html_url: undefined,
    description: 'Please try again in a few seconds.',
    last_push: undefined,
    language: undefined,
  };
}

function remove_github_spinner() {
  let toRemove = document.querySelector('#github-loading-spinner');
  toRemove.parentNode.removeChild(toRemove);
}

function remove_repl_spinner() {
  let toRemove = document.querySelector('#repl-loading-spinner');
  toRemove.parentNode.removeChild(toRemove);
}
