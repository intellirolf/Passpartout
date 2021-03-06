var isAndroid = (Ti.Platform.osname === 'android') ? true : false;

const DEFAULT = {
	WIDTH : '90%',
	TOP : 10,
	PADDING : 19,
	BORDERRADIUS : 5,
	BACKGROUNDCOLOR : 'white',
	HEIGHT : 59,
	SCALE : 0.7,
	HINTCOLOR : '#666',
	INPUTCOLOR : '#0A3478',
	STAR : '⚫︎︎'
};

var Widget = function() {
	//arguments
	var args = arguments[0] || {};
	var options = {
		// container
		width : args.width || DEFAULT.WIDTH,
		top : args.top || DEFAULT.TOP,
		backgroundColor : args.backgroundColor || DEFAULT.BACKGROUNDCOLOR,
		borderRadius : args.borderRadius || DEFAULT.BORDERRADIUS,
		height : args.height || DEFAULT.HEIGHT,
		padding : args.paddingLeft || DEFAULT.PADDING,
		
		// hint
		hintcolor : args.hintcolor || DEFAULT.HINTCOLOR,
		hinttop : args.hinttop || 20,
		hintFontFamily : args.hintFontFamily,
		hintFontSize : args.hintFontSize,
		scale : args.scale || DEFAULT.SCALE,
		hintAnimationTarget : args.hintAnimationTarget || 0,

		// input-Feld
		inputcolor : args.inputcolor || DEFAULT.INPUTCOLOR,
		inputFontFamily : args.inputFontFamily,
		inputFontSize : args.inputFontSize,
		inputTop : args.inputTop || 20,

		// passwordMask
		passwordMask : args.passwordMask,
		passwordMaskHeight : args.passwordMaskHeight  || 30,
		passwordMaskFontSize : args.passwordMaskFontSize  || 20,
		passwordMaskTop : args.passwordMaskTop  || 20,
	};
	// options.fontSize = args.fontSize || options.heigth;
	// options.hinttop = (options.height - 3 * options.fontSize) || '40%';

	//console.log(options);
	/* container */
	var self = Ti.UI.createView({
		width : options.width,
		top : options.top,
		backgroundColor : options.backgroundColor,
		borderRadius : options.borderRadius,
		height : options.height,
		bubbleParent : false,
	});
	/* Hint */
	self.hint = Ti.UI.createLabel({
		text : args.hintText,
		top : options.hinttop,
		color : options.hintcolor,
		touchEnabled : false,
		font : {
			fontFamily : options.hintFontFamily,
			fontSize : options.hintFontSize,
			//fontWeight : 'bold'
		},
		anchorPoint : {
			x : 0,
			y : 1
		},
		left : options.padding
	});
	self.add(self.hint);
	/* the input */
	self.input = Ti.UI.createTextField({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		top: options.inputTop,
		autocorrect  : false,
		windowSoftInputMode : isAndroid ? Ti.UI.Android.SOFT_INPUT_STATE_HIDDEN : undefined,
		left : options.padding,
		right : options.padding,
		backgroundColor : 'transparent',
		passwordMask : args.passwordMask,
		font : {
			fontFamily : options.inputFontFamily,
			fontSize : options.inputFontSize,
			//fontWeight : 'bold'
		},
		color : (args.passwordMask) ? options.backgroundColor : options.inputcolor
	});
	self.add(self.input);
	if (args.passwordMask) {
		self.password = Ti.UI.createLabel({
			backgroundColor : options.backgroundColor,
			textAlign : 'left',
			visible : false,
			color : options.inputcolor,
			left : options.padding,
			touchEnabled : false,
			width : Ti.UI.FILL,
			height: options.passwordMaskHeight,
			font : {
				fontSize : options.passwordMaskFontSize
			},
			top: options.passwordMaskTop,
		});
		self.add(self.password);
	}

	//config references this
	var _config = {
		duration : 200,
		editable : true,
		exceeding : false
	};

	//declare events in object
	var _events = {
		CLICK : 'click',
		FOCUS : 'focus',
		BLUR : 'blur',
		CHANGE : 'change'
	};
	var _animation = {
		ANIMATION_UP : function() {
			if (!_config.editable)
				return;
			var lenHint = self.hint.getText().length;
			lenHint += lenHint * (Number(lenHint) > 25 ? 0.20 : 0.10);
			self.hint.animate({
				"top" : options.hintAnimationTarget,
				"left" : options.padding,
				"transform" : Ti.UI.create2DMatrix().scale(options.scale),
				"duration" : _config.duration
			});
		},
		ANIMATION_DOWN : function() {
			if (!_config.editable)
				return;
			var attrsHint = {
				"top" : options.hinttop,
				"left" : options.padding,
				"transform" : Ti.UI.create2DMatrix().scale(1),
				"duration" : _config.duration
			};
			if (self.input.getValue()) {
				attrsHint["top"] = options.hintAnimationTarget;
				attrsHint["transform"] = Ti.UI.create2DMatrix().scale(options.scale);
			}
			//console.log(attrsHint);
			self.hint.animate(attrsHint);
		}
	};
	self.input.addEventListener(_events.FOCUS, _animation.ANIMATION_UP);
	self.input.addEventListener(_events.BLUR, _animation.ANIMATION_DOWN);
	(function() {
		_config.duration = args.animationDuration || _config.duration;
		var _init = {
			width : args.width,
			top : args.top,
			left : args.left,
			right : args.right,
			bottom : args.bottom,
			keyboardType : args.keyboardType,
			returnKey : args.returnKey,
			password : args.password,
			editable : args.editable,
			maxLength : 999999,
			minLength : args.minLength
		};
		if ( typeof _init.editable == "string")
			_init.editable = eval(_init.editable);

		if (_init.keyboardType)
			self.input.setKeyboardType(_init.keyboardType);
		if (_init.returnKey)
			self.input.setReturnKeyType(_init.returnKey);
		if (_init.password)
			self.input.setPasswordMask(_init.password);
		if (_init.editable == false) {
			self.setOpacity(0.3);
			self.input.setEditable(false);
			_config.editable = false;
		}
		if (_init.maxLength > 0) {
		
			//Add on change event listener
			self.input.addEventListener(_events.CHANGE, function(event) {
				//console.log(event.source.value);
				var length = self.input.getValue().length;
				//Animate check
				if (length == 0 && self.password) {
					self.password.hide();
					//Animate out
					return;
				} else if (length >= 1) {
					if (self.password) {
						var txt = '';
						for (var i = 0; i < length; i++)
							txt = (txt + DEFAULT.STAR);

						self.password.setText(txt);
						self.password.show();
					}
					return;
					
				}
				//Animate in
				//Check minLength value or maxLength value
				if (length < _init.minLength || length > _init.maxLength) {
					//Set flag for next focus / blur event
					_config.exceeding = true;
					//Set exceeding color
					self.hint.color = _config.color.exceeding;
				}/*else if (self.children[2].backgroundColor != _config.color.post) {
				//Set flag for next focus / blur event
				_config.exceeding = false;
				//Reset to color back to normal1
				self.children[2].backgroundColor = _config.color.post;
				self.hint.color = _config.color.post;
				}*/
				
			});
		}
	})();
	self.getValue = function() {
		return self.input.getValue();
	};
	self.ANIMATION_UP = function() {
		_animation.ANIMATION_UP();
	};
	self.ANIMATION_DOWN = function() {
		_animation.ANIMATION_DOWN();
	};
	self.setValue = function(value, up) {
		if (up)
			_animation.ANIMATION_UP();
		self.input.setValue(value);
		self.input.fireEvent(_events.CHANGE, {});
		//hier das Event feuern, der Payload kann leer bleiben
	};
	self.addEventListener = function(event, callback) {
		self.input.addEventListener(event, function(e) {
			callback(e);
		});
	};
	self.removeEventListener = function(event, callback) {
		self.input.removeEventListener(event, function(e) {
			callback(e);
		});
	};
	self.blur = function(toFocus) {
		self.input.blur();
	};
	self.focus = function() {
		self.input.focus();
	};
	return self;
};

exports.createView = function(args) {
	return new Widget(args);
};
