function goToYT(query_string) {
    chrome.tabs.update(null, {url: "https://www.youtube.com/results?search_query="+query_string});
}

function getQuery(search_url) {
    if(search_url.indexOf('?q=') == -1) return false;
    
    query = search_url.substring(search_url.indexOf('?q=')+ 3, search_url.length);

    query = query.split('&')[0].split('%3A');

    if(query.length < 2) return false;
    return query;   
}


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // if (changeInfo.status == "complete") {
        console.log(tab.url);
        query = getQuery(tab.url);
        if(typeof(query)=="object") {
            if(query[0]=='yt') goToYT(query[1]);
        }
    // } 
});