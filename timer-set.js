// Get reference to our background page
var _bp = chrome.extension.getBackgroundPage();

// Set our click handlers
$(document).ready(function() {

	$("#setAlarm").click(function() {
	
		_bp.setState(_bp.TimerState.SET);
		_bp.setTimer($("#minutes").val());
		
	});
	
	$("#showState").click(function() {
		_bp.showNotification("State: " + _bp.getState());
	});

});