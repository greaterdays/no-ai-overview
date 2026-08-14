chrome.webNavigation.onBeforeNavigate.addListener(
    (details) => {
        if (details.frameId !== 0) return;

        const url = new URL(details.url);
        const query = url.searchParams.get("q");

        if(query && !query.endsWith(" -ai")) {
            url.searchParams.set("q", query + " -ai");
            chrome.tabs.update(details.tabId, { url: url.toString() });
        }
    },
    { url: [{ hostContains: "google.", pathPrefix: "/search" }] }
);