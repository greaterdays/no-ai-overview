function cleanSearchBar() {
    const searchBox = document.querySelector('textarea[name="q"], input[name="q"]');

    if (searchBox) {
        if (searchBox.value.endsWith(" -ai")) {
            searchBox.value = searchBox.value.slice(0, -4);
        }
    }
}

cleanSearchBar();

const observer = new MutationObserver(cleanSearchBar);
observer.observe(document.documentElement, { childList: true, subtree: true });

setTimeout(() => {
    observer.disconnect();
}, 200)