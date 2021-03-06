const DRAWERWIDTH = 160;

var ldf = Ti.Platform.displayCaps.logicalDensityFactor || 1;
/* Deciding device class */
var maxwidth = Math.max(Ti.Platform.displayCaps.platformHeight / ldf, Ti.Platform.displayCaps.platformWidth / ldf);
const isTablet = Ti.Platform.osname === 'ipad' || (Ti.Platform.osname === 'android' && (maxwidth > 899 )),
    isHandheld = !isTablet;

var Module = function(args) {
	var self = Ti.UI.createView({
	});
	/* only on iOS we have to calc with this height */
	var statusbarHeight = args.navigation.fullscreen == true || Ti.Platform.osname === 'android' ? 0 : 20;
	var position = args.navigation.position || 'top',
	    nav = args.navigation,
	    naviwidth = 0,
	    screenwidth = 0;
	var activeTab = nav.activeTab || 0;
	self.containerView = Ti.UI.createScrollableView({
		top : position == 'top' ? nav.height + statusbarHeight : undefined,
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
			top : position == 'top' ? statusbarHeight : undefined,
			bottom : position == 'bottom' ? 0 : undefined,
			height : nav.height,
			scrollType : 'horizontal',
			contentWidth : Ti.UI.SIZE,
			backgroundColor : nav.backgroundColor,
		});
		self.add(self.navigationView);
		var highlighter = Ti.UI.createView({
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
		self.navigationView.add(highlighter);
		self.navigationView.addEventListener('touchstart', function(_e) {
			if (_e.source.itemId == undefined)
				return;
			var ndx = _e.source.itemId;
			self.navigationView.children[activeTab].color = nav.color;
			self.navigationView.children[activeTab].setFont({
				fontFamily : nav.fontFamily,
				fontSize : nav.fontSize
			});
			self.navigationView.children[ndx].color = nav.activeColor;
			self.navigationView.children[ndx].setFont({
				fontFamily : nav.fontFamilyActive,
				fontSize : nav.fontSize
			});
			highlighter.animate({
				left : nav.tabWidth * ndx,
			});
			self.containerView.scrollToView(ndx);
			activeTab = ndx;
		});
		break;
	case args.handheld || isHandheld :
		// Position für Handheld anpassen - Parameter: nav.burgernav.height
		self.containerView.top = nav.burgernav.height + statusbarHeight;
		self.navigationView = Ti.UI.createView({
			top : position == 'top' ? statusbarHeight : undefined,
			bottom : position == 'bottom' ? 0 : undefined,
			height : nav.burgernav.height,
			backgroundColor : nav.backgroundColor,
		});
		self.add(self.navigationView);
		var darker = Ti.UI.createView({
			backgroundColor : '#7000',
			top : nav.burgernav.height + statusbarHeight,
		});
		var drawerView = Ti.UI.createTableView({
			backgroundColor : nav.backgroundColor,
			top : nav.burgernav.height + statusbarHeight,
			scrollType : 'vertical',
			contentHeight : Ti.UI.SIZE,
			height : Ti.UI.FILL,
			left : -DRAWERWIDTH,
			width : DRAWERWIDTH,
			zIndex : 99,
			separatorColor : nav.backgroundActiveColor,
			data : args.tabs.map(function(tab, ndx) {
				var row = Ti.UI.createTableViewRow({
					ndx : ndx,
					selectedBackgroundColor : nav.backgroundActiveColor
				});
				row.add(Ti.UI.createLabel({
					color : args.navigation.color,
					left : 10,
					width : Ti.UI.FILL,
					textAlign : 'left',
					height : Ti.UI.SIZE,
					top : 10,
					bottom : 10,
					font : {
						fontFamily : nav.fontFamily,
						fontSize : nav.fontSize
					},
					text : tab.title.toUpperCase()
				}));

				return row;
			})
		});
		drawerView.addEventListener('click', function(_e) {
			self.remove(darker);
			burger.out = false;
			drawerView.animate({
				left : -DRAWERWIDTH,
				duration : 700
			}, function() {
				self.containerView.scrollToView(_e.rowData.ndx);
			});

		});
		self.add(drawerView);
		// wrap burger in View to enlarge the clickable area of the burger
		var burger = Ti.UI.createView({
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			left : 0,
		});
		burger.add(Ti.UI.createLabel({
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			color : 'white',
			left : 10,
			right : 10,
			out : false,
			text : '☰',
			font : {
				fontWeight : 'bold',
				fontSize : 30
			},
		}));

		var toggleMenu = function() {
			if (burger.out == false) {
				self.add(darker);
				burger.out = true;
				drawerView.animate({
					left : 0
				});
			} else {
				self.remove(darker);
				burger.out = false;
				drawerView.animate({
					left : -DRAWERWIDTH
				});
			}
		};
		burger.addEventListener('singletap', toggleMenu);
		darker.addEventListener('singletap', toggleMenu);
		self.navigationView.add(burger);
		console.log('HH');

		break;
	}
	return self;
};

exports.createView = function(args) {
	return new Module(args);
};
