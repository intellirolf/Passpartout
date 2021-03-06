var GLOBALS = require('GLOBALS');

module.exports = function() {
	var args = arguments[0] || {};
	var rows = [];
	for (var i = 0; i < 23; i++) {
		rows[i] = Ti.UI.createTableViewRow({
			itemId : i,
			backgroundColor : 'white',
			height : Ti.UI.SIZE
		});
		rows[i].add(Ti.UI.createLabel({
			text : '#' + (i + 1),
			left : 5,
			color : '#aaa',
			font : {
				fontWeight : 'bold',
				fontSize : 33
			}
		}));
		rows[i].add(Ti.UI.createLabel({
			text : require('vendor/loremipsum')(4),
			left : 70,
			top : 5,
			bottom : 10,
			right : 10,
			height : 40,
			color : '#444',
			font : {
				fontSize : 18,
				fontFamily : 'Frutiger'
			}
		}));
	}
	var self = Ti.UI.createTableView({
		data : rows
	});
	self.addEventListener('click', function(_e) {
		args.parent && args.parent.fireEvent('selectbooking', {
			payload : _e.rowData.itemId
		});
	});
	return self;
};
