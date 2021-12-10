async function get_request_json(url) {
    return fetch(url).then((response) => {
        return response.json();
    });
}
