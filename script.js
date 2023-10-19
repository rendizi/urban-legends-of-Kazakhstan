function loadContent() {
    const path = window.location.pathname;
    const contentDiv = document.getElementById("content");

    if (path === '/') {
        contentDiv.innerHTML = '<object data="index.html" type="text/html"></object>';
    } else if (path === '/candles') {
        contentDiv.innerHTML = '<object data="candles.html" type="text/html"></object>';
    } else if (path === '/ghosts_of_the_gym') {
        contentDiv.innerHTML = '<object data="ghosts_of_the_gym.html" type="text/html"></object>';
    } else {
        contentDiv.innerHTML = 'Page not found. Try next time';
    }
}

loadContent();
window.addEventListener("popstate", loadContent);
