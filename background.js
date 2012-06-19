// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(onHuluTabUpdated);

// Define our Alarm's possible states
// TODO Combine these using protoype, defineGetter or defineProperties
var AlarmState = {"UNSET": 0, "SET": 1};
var _state = 0;
function setState(state) { _state = state; }
function getState() { return _state; }


// Called when the url of a tab changes.
function onHuluTabUpdated(tabId, changeInfo, tab) {
  // If we have a Hulu tab, do something
  if (tab.url.indexOf('hulu.com') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
    chrome.pageAction.setTitle({ "tabId": tabId, "title": "This is the tooltip.  Fill in later" });
    chrome.pageAction.setPopup({ "tabId": tabId, "popup": "first.html" });        
  }
};

// onClicked even only fired if popup isn't set
chrome.pageAction.onClicked.addListener(function(tab) {
	window.open("first.html");
});


function showNotification(body) {
	var notification = webkitNotifications.createNotification(
  		'icon-48.png',  // icon url - can be relative
  		'Hello!',  // notification title
  		body  // notification body text
	);
	
	notification.show();
	
}
