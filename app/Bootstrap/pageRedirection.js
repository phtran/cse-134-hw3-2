function goToPage (url) {
    window.location.assign(url);
}

function init() {
    window.localStorage['players'] = JSON.stringify([]);
}