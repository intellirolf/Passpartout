var Module = function(options) {
	this.color = options.color || 'gray';
	this.name = options.name || 'time';
	this.size = options.size || 10;
	if (!exports[this.name]) {
		console.log(this.name + ' not found in collection of icons');
		return null;
	}
	var filehandle = Ti.Filesystem.getFile(Ti.Filesystem.isExternalStoragePresent() ? Ti.Filesystem.getExternalStorageDirectory() : Ti.Filesystem.getApplicationDataDirectory(), 'icon-' + this.name + '-' + this.size + '-' + this.color + '.png');
	if (!filehandle.exists() || true) {
		var labelView = Ti.UI.createLabel({
			font : {
				fontFamily : 'AppIcons',
				fontSize : (this.size * 0.8),
				fontWeight : 'normal'
			},
			color : this.color,
			backgroundColor : 'transparent',
			height : this.size,
			width : this.size,
			text : exports[this.name],
			textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
			verticalAlign : Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
		});
		var blob = labelView.toImage();
		if (blob.media !== undefined)
			blob = blob.media;
		filehandle.write(blob, false);
	}
	return filehandle.nativePath;
};
exports.createIcon = function(options) {
	return new Module(options);
};
var icons = {};
[['glass', 0xf000], ['music', 0xf001], ['search', 0xf002], ['envelope', 0xf003], ['heart', 0xf004], ['star', 0xf005], ['star_empty', 0xf006], ['user', 0xf007], ['film', 0xf008], ['th_large', 0xf009], ['th', 0xf00a], ['th_list', 0xf00b], ['tick', 0xf00c], ['ok', 0xf00c], ['x_mark', 0xf00d], ['remove', 0xf00d], ['zoom_in', 0xf00e], ['zoom_out', 0xf010], ['power_off', 0xf011], ['off', 0xf011], ['signal', 0xf012], ['cog', 0xf013], ['trash', 0xf014], ['home', 0xf015], ['file', 0xf016], ['time', 0xf017], ['road', 0xf018], ['download_alt', 0xf019], ['download', 0xf01a], ['upload', 0xf01b], ['inbox', 0xf01c], ['play_circle', 0xf01d], ['rotate_right', 0xf01e], ['repeat', 0xf01e], ['refresh', 0xf021], ['list_alt', 0xf022], ['lock', 0xf023], ['flag', 0xf024], ['headphones', 0xf025], ['volume_off', 0xf026], ['volume_down', 0xf027], ['volume_up', 0xf028], ['qrcode', 0xf029], ['barcode', 0xf02a], ['tag', 0xf02b], ['tags', 0xf02c], ['book', 0xf02d], ['bookmark', 0xf02e], ['print', 0xf02f], ['camera', 0xf030], ['font', 0xf031], ['bold', 0xf032], ['italic', 0xf033], ['text_height', 0xf034], ['text_width', 0xf035], ['align_left', 0xf036], ['align_center', 0xf037], ['align_right', 0xf038], ['align_justify', 0xf039], ['list', 0xf03a], ['indent_left', 0xf03b], ['indent_right', 0xf03c], ['facetime_video', 0xf03d], ['picture', 0xf03e], ['pencil', 0xf040], ['map_marker', 0xf041], ['adjust', 0xf042], ['tint', 0xf043], ['edit', 0xf044], ['share', 0xf045], ['check', 0xf046], ['move', 0xf047], ['step_backward', 0xf048], ['fast_backward', 0xf049], ['backward', 0xf04a], ['play', 0xf04b], ['pause', 0xf04c], ['stop', 0xf04d], ['forward', 0xf04e], ['fast_forward', 0xf050], ['step_forward', 0xf051], ['eject', 0xf052], ['chevron_left', 0xf053], ['chevron_right', 0xf054], ['plus_sign', 0xf055], ['minus_sign', 0xf056], ['remove_sign', 0xf057], ['ok_sign', 0xf058], ['question_sign', 0xf059], ['info_sign', 0xf05a], ['screenshot', 0xf05b], ['remove_circle', 0xf05c], ['ok_circle', 0xf05d], ['ban_circle', 0xf05e], ['arrow_left', 0xf060], ['arrow_right', 0xf061], ['arrow_up', 0xf062], ['arrow_down', 0xf063], ['mail_forward', 0xf064], ['share_alt', 0xf064], ['resize_full', 0xf065], ['resize_small', 0xf066], ['plus', 0xf067], ['minus', 0xf068], ['asterisk', 0xf069], ['exclamation_sign', 0xf06a], ['gift', 0xf06b], ['leaf', 0xf06c], ['fire', 0xf06d], ['eye_open', 0xf06e], ['eye_close', 0xf070], ['warning_sign', 0xf071], ['plane', 0xf072], ['calendar', 0xf073], ['random', 0xf074], ['comment', 0xf075], ['magnet', 0xf076], ['chevron_up', 0xf077], ['chevron_down', 0xf078], ['retweet', 0xf079], ['shopping_cart', 0xf07a], ['folder_close', 0xf07b], ['folder_open', 0xf07c], ['resize_vertical', 0xf07d], ['resize_horizontal', 0xf07e], ['bar_chart', 0xf080], ['twitter_sign', 0xf081], ['facebook_sign', 0xf082], ['camera_retro', 0xf083], ['key', 0xf084], ['cogs', 0xf085], ['comments', 0xf086], ['thumbs_up', 0xf087], ['thumbs_down', 0xf088], ['star_half', 0xf089], ['heart_empty', 0xf08a], ['signout', 0xf08b], ['linkedin_sign', 0xf08c], ['pushpin', 0xf08d], ['external_link', 0xf08e], ['signin', 0xf090], ['trophy', 0xf091], ['github_sign', 0xf092], ['upload_alt', 0xf093], ['lemon', 0xf094], ['phone', 0xf095], ['unchecked', 0xf096], ['check_empty', 0xf096], ['bookmark_empty', 0xf097], ['phone_sign', 0xf098], ['twitter', 0xf099], ['facebook', 0xf09a], ['github', 0xf09b], ['unlock', 0xf09c], ['credit_card', 0xf09d], ['rss', 0xf09e], ['hdd', 0xf0a0], ['bullhorn', 0xf0a1], ['bell', 0xf0a2], ['certificate', 0xf0a3], ['hand_right', 0xf0a4], ['hand_left', 0xf0a5], ['hand_up', 0xf0a6], ['hand_down', 0xf0a7], ['circle_arrow_left', 0xf0a8], ['circle_arrow_right', 0xf0a9], ['circle_arrow_up', 0xf0aa], ['circle_arrow_down', 0xf0ab], ['globe', 0xf0ac], ['wrench', 0xf0ad], ['tasks', 0xf0ae], ['filter', 0xf0b0], ['briefcase', 0xf0b1], ['fullscreen', 0xf0b2], ['group', 0xf0c0], ['link', 0xf0c1], ['cloud', 0xf0c2], ['beaker', 0xf0c3], ['cut', 0xf0c4], ['copy', 0xf0c5], ['paper_clip', 0xf0c6], ['save', 0xf0c7], ['sign_blank', 0xf0c8], ['reorder', 0xf0c9], ['list_ul', 0xf0ca], ['list_ol', 0xf0cb], ['strikethrough', 0xf0cc], ['underline', 0xf0cd], ['table', 0xf0ce], ['magic', 0xf0d0], ['truck', 0xf0d1], ['pinterest', 0xf0d2], ['pinterest_sign', 0xf0d3], ['google_plus_sign', 0xf0d4], ['google_plus', 0xf0d5], ['money', 0xf0d6], ['caret_down', 0xf0d7], ['caret_up', 0xf0d8], ['caret_left', 0xf0d9], ['caret_right', 0xf0da], ['columns', 0xf0db], ['sort', 0xf0dc], ['sort_down', 0xf0dd], ['sort_up', 0xf0de], ['envelope_alt', 0xf0e0], ['linkedin', 0xf0e1], ['rotate_left', 0xf0e2], ['undo', 0xf0e2], ['legal', 0xf0e3], ['dashboard', 0xf0e4], ['comment_alt', 0xf0e5], ['comments_alt', 0xf0e6], ['bolt', 0xf0e7], ['sitemap', 0xf0e8], ['umbrella', 0xf0e9], ['paste', 0xf0ea], ['lightbulb', 0xf0eb], ['exchange', 0xf0ec], ['cloud_download', 0xf0ed], ['cloud_upload', 0xf0ee], ['user_md', 0xf0f0], ['stethoscope', 0xf0f1], ['suitcase', 0xf0f2], ['bell_alt', 0xf0f3], ['coffee', 0xf0f4], ['food', 0xf0f5], ['file_text', 0xf0f6], ['building', 0xf0f7], ['hospital', 0xf0f8], ['ambulance', 0xf0f9], ['medkit', 0xf0fa], ['fighter_jet', 0xf0fb], ['beer', 0xf0fc], ['h_sign', 0xf0fd], ['plus_sign_alt', 0xf0fe], ['double_angle_left', 0xf100], ['double_angle_right', 0xf101], ['double_angle_up', 0xf102], ['double_angle_down', 0xf103], ['angle_left', 0xf104], ['angle_right', 0xf105], ['angle_up', 0xf106], ['angle_down', 0xf107], ['desktop', 0xf108], ['laptop', 0xf109], ['tablet', 0xf10a], ['mobile_phone', 0xf10b], ['circle_blank', 0xf10c], ['quote_left', 0xf10d], ['quote_right', 0xf10e], ['spinner', 0xf110], ['circle', 0xf111], ['mail_reply', 0xf112], ['reply', 0xf112], ['github_alt', 0xf113], ['folder_close_alt', 0xf114], ['folder_open_alt', 0xf115], ['expand_alt', 0xf116], ['collapse_alt', 0xf117], ['smile', 0xf118], ['frown', 0xf119], ['meh', 0xf11a], ['gamepad', 0xf11b], ['keyboard', 0xf11c], ['flag_alt', 0xf11d], ['flag_checkered', 0xf11e], ['terminal', 0xf120], ['code', 0xf121], ['mail_reply_all', 0xf122], ['reply_all', 0xf122], ['star_half_full', 0xf123], ['star_half_empty', 0xf123], ['location_arrow', 0xf124], ['crop', 0xf125], ['code_fork', 0xf126], ['unlink', 0xf127], ['question', 0xf128], ['info', 0xf129], ['exclamation', 0xf12a], ['superscript', 0xf12b], ['subscript', 0xf12c], ['eraser', 0xf12d], ['puzzle_piece', 0xf12e], ['microphone', 0xf130], ['microphone_off', 0xf131], ['shield', 0xf132], ['calendar_empty', 0xf133], ['fire_extinguisher', 0xf134], ['rocket', 0xf135], ['maxcdn', 0xf136], ['chevron_sign_left', 0xf137], ['chevron_sign_right', 0xf138], ['chevron_sign_up', 0xf139], ['chevron_sign_down', 0xf13a], ['html5', 0xf13b], ['css3', 0xf13c], ['anchor', 0xf13d], ['unlock_alt', 0xf13e], ['bullseye', 0xf140], ['ellipsis_horizontal', 0xf141], ['ellipsis_vertical', 0xf142], ['rss_sign', 0xf143], ['play_sign', 0xf144], ['ticket', 0xf145], ['minus_sign_alt', 0xf146], ['check_minus', 0xf147], ['level_up', 0xf148], ['level_down', 0xf149], ['check_sign', 0xf14a], ['edit_sign', 0xf14b], ['external_link_sign', 0xf14c], ['share_sign', 0xf14d], ['compass', 0xf14e], ['collapse', 0xf150], ['collapse_top', 0xf151], ['expand', 0xf152], ['eur', 0xf153], ['gbp', 0xf154], ['usd', 0xf155], ['inr', 0xf156], ['jpy', 0xf157], ['cny', 0xf158], ['krw', 0xf159], ['btc', 0xf15a], ['file_alt', 0xf15b], ['file_text_alt', 0xf15c], ['sort_by_alphabet', 0xf15d], ['sort_by_alphabet_alt', 0xf15e], ['sort_by_attributes', 0xf160], ['sort_by_attributes_alt', 0xf161], ['sort_by_order', 0xf162], ['sort_by_order_alt', 0xf163], ['thumbs_up_alt', 0xf164], ['thumbs_down_alt', 0xf165], ['youtube_sign', 0xf166], ['youtube', 0xf167], ['xing', 0xf168], ['xing_sign', 0xf169], ['youtube_play', 0xf16a], ['dropbox', 0xf16b], ['stackexchange', 0xf16c], ['instagram', 0xf16d], ['flickr_sign', 0xf16e], ['adn', 0xf170], ['bitbucket', 0xf171], ['bitbucket_sign', 0xf172], ['tumblr', 0xf173], ['tumblr_sign', 0xf174], ['long_arrow_down', 0xf175], ['long_arrow_up', 0xf176], ['long_arrow_left', 0xf177], ['long_arrow_right', 0xf178], ['apple', 0xf179], ['windows_8', 0xf17a], ['android', 0xf17b], ['linux', 0xf17c], ['dribble', 0xf17d], ['skype', 0xf17e], ['foursquare', 0xf180], ['trello', 0xf181], ['female', 0xf182], ['male', 0xf183], ['gittip', 0xf184], ['sun', 0xf185], ['moon', 0xf186], ['archive', 0xf187], ['bug', 0xf188], ['vk', 0xf189], ['weibo', 0xf18a], ['renren', 0xf18b], ['search_alt', 0xf302], ['trash_alt', 0xf314], ['download_alt2', 0xf319], ['print_alt', 0xf32f], ['indent_right_alt', 0xf33b], ['indent_left_alt', 0xf33c], ['pencil_alt', 0xf340], ['edit_alt', 0xf344], ['fire_alt', 0xf36d], ['pushpin_alt', 0xf38d], ['upload_alt2', 0xf393], ['lemon_alt', 0xf394], ['github_alt2', 0xf39b], ['group_alt', 0xf3c0], ['link_alt', 0xf3c1], ['cloud_alt', 0xf3c2], ['save_alt', 0xf3c7], ['windows', 0xf400], ['camcorder', 0xf401], ['tv', 0xf402], ['radio', 0xf403], ['bar_chart_alt', 0xf404], ['pie_chart', 0xf405], ['line_chart', 0xf406], ['line_chart_alt', 0xf407], ['car', 0xf408], ['truck_long', 0xf409], ['bicycle', 0xf40a], ['motorbike', 0xf40b], ['laptop_mobile_phone', 0xf40c], ['sunny', 0xf40d], ['cloudy', 0xf40e], ['rainy', 0xf40f], ['partly_sunny', 0xf410], ['partly_cloudy', 0xf410], ['thundery', 0xf411], ['snowy', 0xf412], ['snow', 0xf413], ['bullseye_alt', 0xf414], ['podcast', 0xf415], ['globe_alt', 0xf416], ['wifi', 0xf420], ['alarm_clock', 0xf421], ['comment_square', 0xf422], ['comments_square', 0xf423], ['tag_alt', 0xf424], ['book_alt', 0xf425], ['calculator', 0xf430], ['stopwatch', 0xf431], ['lightbulb_alt', 0xf432], ['brick_wall', 0xf433], ['guage', 0xf434], ['file_cabinet', 0xf435], ['clapper', 0xf436], ['weight', 0xf437], ['computer_network', 0xf438], ['thunder', 0xf439], ['bucket', 0xf450], ['thermometer', 0xf451], ['flashlight', 0xf452], ['voice_mail', 0xf453], ['database', 0xf454], ['guage_alt', 0xf455], ['megaphone', 0xf456], ['droplet', 0xf457], ['water', 0xf458], ['air', 0xf459], ['graduation_cap', 0xf45a], ['palette', 0xf45b], ['paper_plane', 0xf45c], ['brush', 0xf45d], ['magnet_alt', 0xf45e], ['lifebuoy', 0xf45f], ['signpost', 0xf460], ['vcard', 0xf461], ['infinity', 0xf462], ['hourglass', 0xf463], ['dot', 0xf464], ['two_dots', 0xf465], ['three_dots', 0xf466], ['cup', 0xf467], ['tools', 0xf468], ['light_down', 0xf469], ['light_up', 0xf46a], ['light_adjust', 0xf46b], ['flow_cascade', 0xf46c], ['flow_branch', 0xf46d], ['flow_tree', 0xf46e], ['flow_line', 0xf46f], ['flow_parallel', 0xf470], ['share_alt2', 0xf471], ['shareable', 0xf472], ['direction', 0xf473], ['js_fiddle', 0xf502], ['vimeo_sign', 0xf506], ['vimeo', 0xf507], ['lastfm_sign', 0xf508], ['lastfm', 0xf509], ['reddit', 0xf50b], ['delicious_sign', 0xf50c], ['wordpress_sign', 0xf50d], ['wordpress', 0xf50e], ['git_fork', 0xf50f], ['blogger_sign', 0xf510], ['blogger', 0xf511], ['flickr', 0xf515], ['picasa_sign', 0xf516], ['picasa', 0xf517], ['amazon_sign', 0xf518], ['amazon', 0xf519], ['yelp_sign', 0xf51a], ['yelp', 0xf51b], ['soundcloud', 0xf51c], ['spotify', 0xf51d], ['yahoo_sign', 0xf520], ['yahoo', 0xf521], ['evernote_sign', 0xf522], ['evernote', 0xf523], ['google_sign', 0xf524], ['google', 0xf525], ['hacker_news', 0xf526], ['map', 0xf529], ['bus_sign', 0xf52a], ['bike_sign', 0xf52b], ['car_sign', 0xf52c], ['taxi_sign', 0xf52d], ['truck_sign', 0xf52e], ['handicap_sign', 0xf52f]]//
.forEach(function(icon) {
	icons[icon[0]] = String.fromCharCode(icon[1]);
});

[['glass', 0xf000], ['music', 0xf001], ['search', 0xf002], ['envelope', 0xf003], ['heart', 0xf004], ['star', 0xf005], ['star_empty', 0xf006], ['user', 0xf007], ['film', 0xf008], ['th_large', 0xf009], ['th', 0xf00a], ['th_list', 0xf00b], ['tick', 0xf00c], ['ok', 0xf00c], ['x_mark', 0xf00d], ['remove', 0xf00d], ['zoom_in', 0xf00e], ['zoom_out', 0xf010], ['power_off', 0xf011], ['off', 0xf011], ['signal', 0xf012], ['cog', 0xf013], ['trash', 0xf014], ['home', 0xf015], ['file', 0xf016], ['time', 0xf017], ['road', 0xf018], ['download_alt', 0xf019], ['download', 0xf01a], ['upload', 0xf01b], ['inbox', 0xf01c], ['play_circle', 0xf01d], ['rotate_right', 0xf01e], ['repeat', 0xf01e], ['refresh', 0xf021], ['list_alt', 0xf022], ['lock', 0xf023], ['flag', 0xf024], ['headphones', 0xf025], ['volume_off', 0xf026], ['volume_down', 0xf027], ['volume_up', 0xf028], ['qrcode', 0xf029], ['barcode', 0xf02a], ['tag', 0xf02b], ['tags', 0xf02c], ['book', 0xf02d], ['bookmark', 0xf02e], ['print', 0xf02f], ['camera', 0xf030], ['font', 0xf031], ['bold', 0xf032], ['italic', 0xf033], ['text_height', 0xf034], ['text_width', 0xf035], ['align_left', 0xf036], ['align_center', 0xf037], ['align_right', 0xf038], ['align_justify', 0xf039], ['list', 0xf03a], ['indent_left', 0xf03b], ['indent_right', 0xf03c], ['facetime_video', 0xf03d], ['picture', 0xf03e], ['pencil', 0xf040], ['map_marker', 0xf041], ['adjust', 0xf042], ['tint', 0xf043], ['edit', 0xf044], ['share', 0xf045], ['check', 0xf046], ['move', 0xf047], ['step_backward', 0xf048], ['fast_backward', 0xf049], ['backward', 0xf04a], ['play', 0xf04b], ['pause', 0xf04c], ['stop', 0xf04d], ['forward', 0xf04e], ['fast_forward', 0xf050], ['step_forward', 0xf051], ['eject', 0xf052], ['chevron_left', 0xf053], ['chevron_right', 0xf054], ['plus_sign', 0xf055], ['minus_sign', 0xf056], ['remove_sign', 0xf057], ['ok_sign', 0xf058], ['question_sign', 0xf059], ['info_sign', 0xf05a], ['screenshot', 0xf05b], ['remove_circle', 0xf05c], ['ok_circle', 0xf05d], ['ban_circle', 0xf05e], ['arrow_left', 0xf060], ['arrow_right', 0xf061], ['arrow_up', 0xf062], ['arrow_down', 0xf063], ['mail_forward', 0xf064], ['share_alt', 0xf064], ['resize_full', 0xf065], ['resize_small', 0xf066], ['plus', 0xf067], ['minus', 0xf068], ['asterisk', 0xf069], ['exclamation_sign', 0xf06a], ['gift', 0xf06b], ['leaf', 0xf06c], ['fire', 0xf06d], ['eye_open', 0xf06e], ['eye_close', 0xf070], ['warning_sign', 0xf071], ['plane', 0xf072], ['calendar', 0xf073], ['random', 0xf074], ['comment', 0xf075], ['magnet', 0xf076], ['chevron_up', 0xf077], ['chevron_down', 0xf078], ['retweet', 0xf079], ['shopping_cart', 0xf07a], ['folder_close', 0xf07b], ['folder_open', 0xf07c], ['resize_vertical', 0xf07d], ['resize_horizontal', 0xf07e], ['bar_chart', 0xf080], ['twitter_sign', 0xf081], ['facebook_sign', 0xf082], ['camera_retro', 0xf083], ['key', 0xf084], ['cogs', 0xf085], ['comments', 0xf086], ['thumbs_up', 0xf087], ['thumbs_down', 0xf088], ['star_half', 0xf089], ['heart_empty', 0xf08a], ['signout', 0xf08b], ['linkedin_sign', 0xf08c], ['pushpin', 0xf08d], ['external_link', 0xf08e], ['signin', 0xf090], ['trophy', 0xf091], ['github_sign', 0xf092], ['upload_alt', 0xf093], ['lemon', 0xf094], ['phone', 0xf095], ['unchecked', 0xf096], ['check_empty', 0xf096], ['bookmark_empty', 0xf097], ['phone_sign', 0xf098], ['twitter', 0xf099], ['facebook', 0xf09a], ['github', 0xf09b], ['unlock', 0xf09c], ['credit_card', 0xf09d], ['rss', 0xf09e], ['hdd', 0xf0a0], ['bullhorn', 0xf0a1], ['bell', 0xf0a2], ['certificate', 0xf0a3], ['hand_right', 0xf0a4], ['hand_left', 0xf0a5], ['hand_up', 0xf0a6], ['hand_down', 0xf0a7], ['circle_arrow_left', 0xf0a8], ['circle_arrow_right', 0xf0a9], ['circle_arrow_up', 0xf0aa], ['circle_arrow_down', 0xf0ab], ['globe', 0xf0ac], ['wrench', 0xf0ad], ['tasks', 0xf0ae], ['filter', 0xf0b0], ['briefcase', 0xf0b1], ['fullscreen', 0xf0b2], ['group', 0xf0c0], ['link', 0xf0c1], ['cloud', 0xf0c2], ['beaker', 0xf0c3], ['cut', 0xf0c4], ['copy', 0xf0c5], ['paper_clip', 0xf0c6], ['save', 0xf0c7], ['sign_blank', 0xf0c8], ['reorder', 0xf0c9], ['list_ul', 0xf0ca], ['list_ol', 0xf0cb], ['strikethrough', 0xf0cc], ['underline', 0xf0cd], ['table', 0xf0ce], ['magic', 0xf0d0], ['truck', 0xf0d1], ['pinterest', 0xf0d2], ['pinterest_sign', 0xf0d3], ['google_plus_sign', 0xf0d4], ['google_plus', 0xf0d5], ['money', 0xf0d6], ['caret_down', 0xf0d7], ['caret_up', 0xf0d8], ['caret_left', 0xf0d9], ['caret_right', 0xf0da], ['columns', 0xf0db], ['sort', 0xf0dc], ['sort_down', 0xf0dd], ['sort_up', 0xf0de], ['envelope_alt', 0xf0e0], ['linkedin', 0xf0e1], ['rotate_left', 0xf0e2], ['undo', 0xf0e2], ['legal', 0xf0e3], ['dashboard', 0xf0e4], ['comment_alt', 0xf0e5], ['comments_alt', 0xf0e6], ['bolt', 0xf0e7], ['sitemap', 0xf0e8], ['umbrella', 0xf0e9], ['paste', 0xf0ea], ['lightbulb', 0xf0eb], ['exchange', 0xf0ec], ['cloud_download', 0xf0ed], ['cloud_upload', 0xf0ee], ['user_md', 0xf0f0], ['stethoscope', 0xf0f1], ['suitcase', 0xf0f2], ['bell_alt', 0xf0f3], ['coffee', 0xf0f4], ['food', 0xf0f5], ['file_text', 0xf0f6], ['building', 0xf0f7], ['hospital', 0xf0f8], ['ambulance', 0xf0f9], ['medkit', 0xf0fa], ['fighter_jet', 0xf0fb], ['beer', 0xf0fc], ['h_sign', 0xf0fd], ['plus_sign_alt', 0xf0fe], ['double_angle_left', 0xf100], ['double_angle_right', 0xf101], ['double_angle_up', 0xf102], ['double_angle_down', 0xf103], ['angle_left', 0xf104], ['angle_right', 0xf105], ['angle_up', 0xf106], ['angle_down', 0xf107], ['desktop', 0xf108], ['laptop', 0xf109], ['tablet', 0xf10a], ['mobile_phone', 0xf10b], ['circle_blank', 0xf10c], ['quote_left', 0xf10d], ['quote_right', 0xf10e], ['spinner', 0xf110], ['circle', 0xf111], ['mail_reply', 0xf112], ['reply', 0xf112], ['github_alt', 0xf113], ['folder_close_alt', 0xf114], ['folder_open_alt', 0xf115], ['expand_alt', 0xf116], ['collapse_alt', 0xf117], ['smile', 0xf118], ['frown', 0xf119], ['meh', 0xf11a], ['gamepad', 0xf11b], ['keyboard', 0xf11c], ['flag_alt', 0xf11d], ['flag_checkered', 0xf11e], ['terminal', 0xf120], ['code', 0xf121], ['mail_reply_all', 0xf122], ['reply_all', 0xf122], ['star_half_full', 0xf123], ['star_half_empty', 0xf123], ['location_arrow', 0xf124], ['crop', 0xf125], ['code_fork', 0xf126], ['unlink', 0xf127], ['question', 0xf128], ['info', 0xf129], ['exclamation', 0xf12a], ['superscript', 0xf12b], ['subscript', 0xf12c], ['eraser', 0xf12d], ['puzzle_piece', 0xf12e], ['microphone', 0xf130], ['microphone_off', 0xf131], ['shield', 0xf132], ['calendar_empty', 0xf133], ['fire_extinguisher', 0xf134], ['rocket', 0xf135], ['maxcdn', 0xf136], ['chevron_sign_left', 0xf137], ['chevron_sign_right', 0xf138], ['chevron_sign_up', 0xf139], ['chevron_sign_down', 0xf13a], ['html5', 0xf13b], ['css3', 0xf13c], ['anchor', 0xf13d], ['unlock_alt', 0xf13e], ['bullseye', 0xf140], ['ellipsis_horizontal', 0xf141], ['ellipsis_vertical', 0xf142], ['rss_sign', 0xf143], ['play_sign', 0xf144], ['ticket', 0xf145], ['minus_sign_alt', 0xf146], ['check_minus', 0xf147], ['level_up', 0xf148], ['level_down', 0xf149], ['check_sign', 0xf14a], ['edit_sign', 0xf14b], ['external_link_sign', 0xf14c], ['share_sign', 0xf14d], ['compass', 0xf14e], ['collapse', 0xf150], ['collapse_top', 0xf151], ['expand', 0xf152], ['eur', 0xf153], ['gbp', 0xf154], ['usd', 0xf155], ['inr', 0xf156], ['jpy', 0xf157], ['cny', 0xf158], ['krw', 0xf159], ['btc', 0xf15a], ['file_alt', 0xf15b], ['file_text_alt', 0xf15c], ['sort_by_alphabet', 0xf15d], ['sort_by_alphabet_alt', 0xf15e], ['sort_by_attributes', 0xf160], ['sort_by_attributes_alt', 0xf161], ['sort_by_order', 0xf162], ['sort_by_order_alt', 0xf163], ['thumbs_up_alt', 0xf164], ['thumbs_down_alt', 0xf165], ['youtube_sign', 0xf166], ['youtube', 0xf167], ['xing', 0xf168], ['xing_sign', 0xf169], ['youtube_play', 0xf16a], ['dropbox', 0xf16b], ['stackexchange', 0xf16c], ['instagram', 0xf16d], ['flickr_sign', 0xf16e], ['adn', 0xf170], ['bitbucket', 0xf171], ['bitbucket_sign', 0xf172], ['tumblr', 0xf173], ['tumblr_sign', 0xf174], ['long_arrow_down', 0xf175], ['long_arrow_up', 0xf176], ['long_arrow_left', 0xf177], ['long_arrow_right', 0xf178], ['apple', 0xf179], ['windows_8', 0xf17a], ['android', 0xf17b], ['linux', 0xf17c], ['dribble', 0xf17d], ['skype', 0xf17e], ['foursquare', 0xf180], ['trello', 0xf181], ['female', 0xf182], ['male', 0xf183], ['gittip', 0xf184], ['sun', 0xf185], ['moon', 0xf186], ['archive', 0xf187], ['bug', 0xf188], ['vk', 0xf189], ['weibo', 0xf18a], ['renren', 0xf18b], ['search_alt', 0xf302], ['trash_alt', 0xf314], ['download_alt2', 0xf319], ['print_alt', 0xf32f], ['indent_right_alt', 0xf33b], ['indent_left_alt', 0xf33c], ['pencil_alt', 0xf340], ['edit_alt', 0xf344], ['fire_alt', 0xf36d], ['pushpin_alt', 0xf38d], ['upload_alt2', 0xf393], ['lemon_alt', 0xf394], ['github_alt2', 0xf39b], ['group_alt', 0xf3c0], ['link_alt', 0xf3c1], ['cloud_alt', 0xf3c2], ['save_alt', 0xf3c7], ['windows', 0xf400], ['camcorder', 0xf401], ['tv', 0xf402], ['radio', 0xf403], ['bar_chart_alt', 0xf404], ['pie_chart', 0xf405], ['line_chart', 0xf406], ['line_chart_alt', 0xf407], ['car', 0xf408], ['truck_long', 0xf409], ['bicycle', 0xf40a], ['motorbike', 0xf40b], ['laptop_mobile_phone', 0xf40c], ['sunny', 0xf40d], ['cloudy', 0xf40e], ['rainy', 0xf40f], ['partly_sunny', 0xf410], ['partly_cloudy', 0xf410], ['thundery', 0xf411], ['snowy', 0xf412], ['snow', 0xf413], ['bullseye_alt', 0xf414], ['podcast', 0xf415], ['globe_alt', 0xf416], ['wifi', 0xf420], ['alarm_clock', 0xf421], ['comment_square', 0xf422], ['comments_square', 0xf423], ['tag_alt', 0xf424], ['book_alt', 0xf425], ['calculator', 0xf430], ['stopwatch', 0xf431], ['lightbulb_alt', 0xf432], ['brick_wall', 0xf433], ['guage', 0xf434], ['file_cabinet', 0xf435], ['clapper', 0xf436], ['weight', 0xf437], ['computer_network', 0xf438], ['thunder', 0xf439], ['bucket', 0xf450], ['thermometer', 0xf451], ['flashlight', 0xf452], ['voice_mail', 0xf453], ['database', 0xf454], ['guage_alt', 0xf455], ['megaphone', 0xf456], ['droplet', 0xf457], ['water', 0xf458], ['air', 0xf459], ['graduation_cap', 0xf45a], ['palette', 0xf45b], ['paper_plane', 0xf45c], ['brush', 0xf45d], ['magnet_alt', 0xf45e], ['lifebuoy', 0xf45f], ['signpost', 0xf460], ['vcard', 0xf461], ['infinity', 0xf462], ['hourglass', 0xf463], ['dot', 0xf464], ['two_dots', 0xf465], ['three_dots', 0xf466], ['cup', 0xf467], ['tools', 0xf468], ['light_down', 0xf469], ['light_up', 0xf46a], ['light_adjust', 0xf46b], ['flow_cascade', 0xf46c], ['flow_branch', 0xf46d], ['flow_tree', 0xf46e], ['flow_line', 0xf46f], ['flow_parallel', 0xf470], ['share_alt2', 0xf471], ['shareable', 0xf472], ['direction', 0xf473], ['js_fiddle', 0xf502], ['vimeo_sign', 0xf506], ['vimeo', 0xf507], ['lastfm_sign', 0xf508], ['lastfm', 0xf509], ['reddit', 0xf50b], ['delicious_sign', 0xf50c], ['wordpress_sign', 0xf50d], ['wordpress', 0xf50e], ['git_fork', 0xf50f], ['blogger_sign', 0xf510], ['blogger', 0xf511], ['flickr', 0xf515], ['picasa_sign', 0xf516], ['picasa', 0xf517], ['amazon_sign', 0xf518], ['amazon', 0xf519], ['yelp_sign', 0xf51a], ['yelp', 0xf51b], ['soundcloud', 0xf51c], ['spotify', 0xf51d], ['yahoo_sign', 0xf520], ['yahoo', 0xf521], ['evernote_sign', 0xf522], ['evernote', 0xf523], ['google_sign', 0xf524], ['google', 0xf525], ['hacker_news', 0xf526], ['map', 0xf529], ['bus_sign', 0xf52a], ['bike_sign', 0xf52b], ['car_sign', 0xf52c], ['taxi_sign', 0xf52d], ['truck_sign', 0xf52e], ['handicap_sign', 0xf52f]]//
.forEach(function(icon) {
	exports[icon[0]] = String.fromCharCode(icon[1]);
});

