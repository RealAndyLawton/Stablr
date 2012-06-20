// Get reference to our 
var _bp = chrome.extension.getBackgroundPage();

// Set our click handlers
$(document).ready(function() {

	$("#setAlarm").click(function() {
		_bp.setState(_bp.TimerState.SET);
		_bp.setTimer(getAlarmLength());
	});
	
	$("#showState").click(function() {
		_bp.showNotification("State: " + _bp.getState());
	});

});

function getAlarmLength() {

	var whole = $("#minutes").val();
	
	showNotification("Timer Length in minutes" + whole);
	
	return whole * _bp.minute;
	
}

