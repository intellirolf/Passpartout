var ActionBar = require('com.alcoapps.actionbarextras');

module.exports = function() {
	var win = arguments[0].source;
	ActionBar.setTitle(win.title);
	win.subtitle && ActionBar.setSubtitle(win.subtitle);
	ActionBar.setFont('Frutiger');
	ActionBar.subtitleColor = "#ddd";
	ActionBar.setBackgroundColor('#444');
	var activity = win.getActivity();
	if (activity) {
		activity.onCreateOptionsMenu = function() {
			var menu = arguments[0].menu;
			menu.clear();
			menu.add({
				title : 'Menüpunkt1 ',
				itemId : 1,
				showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER,
			}).addEventListener("click", function() {
			});
			menu.add({
				title : 'Menüpunkt2 ',
				itemId : 1,
				showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER,
			}).addEventListener("click", function() {
			});
			menu.add({
				title : 'Menüpunkt3 ',
				itemId : 1,
				checkable : true,
				showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER,
			}).addEventListener("click", function() {
			});
			activity.actionBar.displayHomeAsUp = win.subtitle ? true : false;
		};
		activity.onPrepareOptionsMenu = function(_event) {
			var menu = _event.menu;
		};
		activity && activity.invalidateOptionsMenu();
		activity.actionBar.onHomeIconItemSelected = function(_e) {
			win.close();
		};
	}
};