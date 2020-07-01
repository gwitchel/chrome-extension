
function downloadCheckedLinks() {
    console.log( document.getElementById('input').value)
    console.log( document.getElementById('selections').value)
    chrome.downloads.download({url: "https://s3.amazonaws.com/www-inside-design/uploads/2019/02/teletubbywireframe.png"})
}

window.onload = function() {
  document.getElementById('download0').onclick = downloadCheckedLinks;
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) {
      chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'send_links.js', allFrames: true});
    });
  });
};