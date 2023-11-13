// background.js
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

// chrome.action.onClicked.addListener((tab) => {
//   console.log("H");
//   chrome.storage.local.set({ key: value }).then(() => {
//     console.log("Value is set");
//   });
//   chrome.storage.local.get(["key"]).then((result) => {
//     console.log("Value currently is " + result.key);
//   });

// });

// chrome.storage.local.set({ key: value }).then(() => {
  // console.log("Value is set");
// });


