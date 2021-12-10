const dataLocation = '../proficiency.json';
const barTemplate = document.getElementById('language_template');
const barContainer = document.getElementById('languages_container');

function add_language(parent, item) {
    let new_clone = barTemplate.content.cloneNode(true);

    new_clone.querySelector('#icon').src = get_language_url(item.name);
    new_clone.querySelector('#progBar').style = `width: ${item.proficiency}%`;
    new_clone.querySelector('#progBarLanguage').innerHTML = `${item.name}`;
    // new_clone.querySelector('#progBarProficiency').innerHTML = `${item.proficiency}%`;

    parent.appendChild(new_clone);
}

let langs = undefined;
get_request_json(dataLocation).then((data) => {
    langs = data['languages'].sort((x, y) => {
        if (x.proficiency < y.proficiency) return 1;
        if (x.proficiency > y.proficiency) return -1;
        return 0;
    });

    langs.forEach((lang) => {
        add_language(barContainer, lang);
    });
});
