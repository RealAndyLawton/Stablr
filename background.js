// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  	// If we have a Hulu tab, bootstrap the extension
	if (tab.url.indexOf('hulu.com') > -1) {
  		bootstrap(tabId);
  	}
});

// Bootstrap!
function bootstrap(tabId) {	
	// Set the tab we're working with
	setTab(tabId);  
  
    // Show the page
    chrome.pageAction.show(tabId);
    chrome.pageAction.setTitle({ "tabId": tabId, "title": "This is the tooltip.  Fill in later" });
    chrome.pageAction.setPopup({ "tabId": tabId, "popup": "timer-set.html" });     
}


// Define our Timer's possible states
// TODO Combine these using protoype, defineGetter or defineProperties
var TimerState = {"UNSET": 0, "SET": 1, "CANCELLED": 2};
var _state = 0;
function setState(state) { _state = state; }
function getState() { return _state; }

var _time = 0;
function setTime(time) { _time = time; }
function getTime() { return _time; }

var _tab = 0;
function setTab(tabId) { _tab = tabId; }
function getTab() { return _tab; }

var _timer = null;
function setTimer(delay) {
	_timer = setTimeout(dismissHulu, delay * minute);
}

// Define common time intervals
// TODO Remove debug constants
var fiveSeconds = 5000
var minute = 1000 * 60;
var fiteen = minute * 15;
var half = minute * 30;
var hour = minute * 60;

// Dismiss the timer and close the active Hulu tab
function dismissHulu() {
	// Tell user that we're about to close shop
	showNotification("Closinnnnng time");
	
	// Close the tab
	chrome.tabs.remove(getTab());
	
}


function showNotification(body) {

	var notification = webkitNotifications.createNotification(
  		'icon-48.png',
  		'Stablr Says',  // notification title
  		body  // notification body text
	);
	
	notification.show();
	
}