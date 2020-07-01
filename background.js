chrome.browserAction.onCLicked.addListener(function() {
    chrome.tabs.create({'url' : "chrome://newtab"})

})
