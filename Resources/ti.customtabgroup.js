var ldf = Ti.Platform.displayCaps.logicalDensityFactor || 1;
/* Deciding device class */
var maxwidth = Math.max(Ti.Platform.displayCaps.platformHeight / ldf, Ti.Platform.displayCaps.platformWidth / ldf);
const isTablet = Ti.Platform.osname === 'ipad' || (Ti.Platform.osname === 'android' && (maxwidth > 899 )),
    isHandheld = !isTablet;
var Blurer = require('bencoding.blur');

var Module = function(args) {
	var self = Ti.UI.createView({
	});
	var position = args.navigation.position || 'top',
	    nav = args.navigation,
	    naviwidth = 0,
	    screenwidth = 0;
	var activeTab = nav.activeTab || 0;
	self.containerView = Ti.UI.createScrollableView({
		top : position == 'top' ? nav.height : undefined,
		bottom : position == 'bottom' ? nav.height : undefined,
		views : args.tabs.map(function(tab) {
			return tab.view;
		}),
		scrollingEnabled : false
	});
	self.add(self.containerView);
	/*
	 now we go separated ways for handheld and tablet
	 */
	switch (true) {
	case args.tablet || isTablet :
		self.navigationView = Ti.UI.createScrollView({
			top : position == 'top' ? 0 : undefined,
			bottom : position == 'bottom' ? 0 : undefined,
			height : nav.height,
			scrollType : 'horizontal',
			contentWidth : Ti.UI.SIZE,
			backgroundColor : nav.backgroundColor,
		});
		self.add(self.navigationView);
		var handler = Ti.UI.createView({
			width : nav.tabWidth,
			touchEnabled : false,
			left : activeTab * nav.tabWidth,
			backgroundColor : nav.backgroundActiveColor
		});
		args.tabs.forEach(function(tab, ndx) {
			var color = ndx == nav.activeTab ? nav.activeColor : nav.color;
			var fontFamily = ndx == nav.activeTab ? nav.fontFamilyActive : nav.fontFamily;
			var navLabel = Ti.UI.createLabel({
				width : nav.tabWidth,
				height : Ti.UI.FILL,
				left : nav.tabWidth * ndx,
				textAlign : 'center',
				itemId : ndx,
				color : color,
				zIndex : 99,
				font : {
					fontFamily : fontFamily,
					fontSize : nav.fontSize,
				},
				text : tab.title.toUpperCase(),
			});
			if (ndx != 0) {
				navLabel.add(Ti.UI.createView({
					width : '1px',
					height : Ti.UI.FILL,
					left : 0,
					backgroundColor : nav.backgroundActiveColor,
				}));
			}
			self.navigationView.add(navLabel);
			naviwidth += nav.tabWidth;
		});
		self.navigationView.add(handler);
		self.navigationView.addEventListener('singletap', function(_e) {
			if (_e.source.itemId == undefined)
				return;
			var ndx = _e.source.itemId;
			self.navigationView.children[activeTab].color = nav.color;
			self.navigationView.children[activeTab].setFont({
				fontFamily : nav.fontFamily
			});
			self.navigationView.children[ndx].color = nav.activeColor;
			self.navigationView.children[ndx].setFont({
				fontFamily : nav.fontFamilyActive
			});
			handler.animate({
				left : nav.tabWidth * ndx,
				//duration : 500
			}, function() {

			});
			self.containerView.scrollToView(ndx);
			console.log('Info: scrolled to ' + ndx);
			var ldf = Ti.Platform.displayCaps.logicalDensityFactor || 1;
			if (Ti.Platform.displayCaps.platformWidth / ldf < naviwidth) {
				console.log(ndx + '  ' + args.tabs.length);
				switch (true) {
				case (ndx==0) :
					var x = 0;
					break;
				case (ndx==args.tabs.length-1) :
					var x = naviwidth - nav.tabWidth;
					break;
				default:
					var x = nav.tabWidth * ndx - nav.tabWidth / 2;
					break;
				}
			}
			self.navigationView.setContentOffset({
				x : x,
				y : 0
			});
			activeTab = ndx;
		});
		break;
	case args.handheld || isHandheld :
		self.slideOut = function() {
			var file = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory,'blur.png');
			var bg = self.containerView.views[self.containerView.currentPage].toImage();
			console.log(bg);
			self.blurView = (Ti.Platform.osname === 'android')//
			? Blurer.createBasicBlurView({
				image : bg.media,
				blurLevel : 4,
				top : nav.height,
			})//
			: Blurer.createView({
				backgroundView : Ti.UI.createImageView({
					image : bg,
				}),
				opacity : 0,
				blurLevel : 7,
				top : nav.height,
			});
			self.add(self.blurView);
			self.blurView.animate({
				opacity : 1
			});
			handler.animate({
				left : -15
			}, function() {
				handler.out = true;
			});
			burger.animate({
				left : 0,
				duration : 200
			});
		};
		self.slideIn = function() {
			blurView && self.remove(self.blurView);
			handler.animate({
				left : -5,
				duration : 100
			}, function() {
				handler.out = false;
			});
			burger.animate({
				left : -BURGERWIDTH + 3,
				duration : 10
			});
		};
		self.navigationView = Ti.UI.createView({
			top : position == 'top' ? 0 : undefined,
			bottom : position == 'bottom' ? 0 : undefined,
			height : nav.height,
			backgroundColor : nav.backgroundColor,
		});
		self.add(self.navigationView);
		var blurView = Ti.UI.createView({
			backgroundColor : '#7000',
			top : nav.height
		});
		const BURGERWIDTH = 200;
		var burger = Ti.UI.createTableView({
			backgroundColor : 'white',
			top : nav.height,
			scrollType : 'vertical',
			contentHeight : Ti.UI.SIZE,
			height : Ti.UI.FILL,
			left : -BURGERWIDTH + 3,
			width : BURGERWIDTH,
			zIndex : 99,
			data : args.tabs.map(function(tab, ndx) {
				var row = Ti.UI.createTableViewRow({
					ndx : ndx,
				});
				row.add(Ti.UI.createLabel({
					color : '#555',
					left : 10,
					width : Ti.UI.FILL,
					textAlign : 'left',
					height : Ti.UI.SIZE,
					top : 5,
					bottom : 5,
					font : {
						fontWeight : 'bold',
						fontSize : 18
					},
					text : tab.title
				}));
				return row;
			})
		});
		burger.addEventListener('click', function(_e) {
			burger.animate({
				left : -BURGERWIDTH + 3,
				duration : 700
			}, function() {
				self.containerView.scrollToView(_e.rowData.ndx);
			});
			self.slideIn();

		});
		self.add(burger);
		var handler = Ti.UI.createLabel({
			color : 'white',
			left : -5,
			out : false,
			text : '☰    ',
			font : {
				fontWeight : 'bold',
				fontSize : 32
			},

		});
		handler.addEventListener('singletap', function() {
			if (false == handler.out) {
				self.slideOut();
			} else {
				self.slideIn();

			};
		});
		self.navigationView.add(handler);
		break;
	}
	return self;
};

exports.createView = function(args) {
	return new Module(args);
};
