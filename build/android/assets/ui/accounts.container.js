var GLOBALS=require("GLOBALS"),ActionBar=require("com.alcoapps.actionbarextras");module.exports=function(){if(GLOBALS.isTablet){var e=require("ui/window")({title:"List of my accounts",layout:"horizontal",horizontalWrap:!1});e.masterView=Ti.UI.createView({left:0,width:"25%",borderWidth:.5,borderColor:"silver"}),e.masterView.add(require("ui/accounts.list")({parent:e}));var i=[Ti.UI.createImageView({image:"http://lorempixel.com/g/1024/768/business/?"+Math.random(),width:Ti.UI.FILL,height:Ti.UI.FILL}),Ti.UI.createView({width:Ti.UI.FILL,height:Ti.UI.FILL})];e.detailView=Ti.UI.createView({layout:"vertical",left:0,top:0,backgroundColor:"gray",width:Ti.UI.FILL,height:Ti.UI.FILL}),e.headLine=Ti.UI.createView({backgroundColor:"#666",top:0,height:0}),e.headLineText=Ti.UI.createLabel({text:"Überschrift",color:"white",left:20,textAlign:"left",width:Ti.UI.FILL,font:{fontSize:20}}),e.headLine.add(e.headLineText);var t=Ti.UI.createScrollableView({left:0,top:0,backgroundImage:"/grid.png",scrollingEnabled:!1,views:i,width:Ti.UI.FILL});e.add(e.masterView),e.add(e.detailView),e.detailView.add(e.headLine),e.detailView.add(t),e.addEventListener("selectaccount",function(a){e.headLine.animate({height:50}),e.headLineText.setText("Bookings in this account (#"+(a.payload+1)+")"),t.scrollToView(0),i[0].opacity=.8,i[0]=require("ui/bookingsbyaccount.list")({parent:e}),t.setViews(i),i[0].animate({opacity:1,left:0,duration:700})}),e.addEventListener("selectbooking",function(a){e.headLineText.setText("<  This booking (#"+(a.payload+1)+")");for(var o=[],r=0;23>r;r++)o.push(require("ui/booking")({parent:e}));i[1]=require("vendor/pageflip.widget")({pages:o,startPage:a.payload,onflipend:function(i){e.headLineText.setText("<  Booking (#"+i.current+")")}}),t.setViews(i),t.scrollToView(1),setTimeout(function(){i[1].peakNext(!0)},700)}),t.addEventListener("scrollend",function(e){console.log(e.currentPage),t.setScrollingEnabled(0==e.currentPage?!1:!1)})}else{var e=require("ui/window")({title:"List of my accounts"});e.add(require("ui/accounts.list")({parent:e})),e.addEventListener("selectaccount",function(i){var t=require("ui/window")({title:"Account (#"+(i.payload+1)+")",onopen:require("ui/main.actionbar"),subtitle:"All bookings of this account"});t.add(require("ui/bookingsbyaccount.list")({parent:e})),t.open()}),e.addEventListener("selectbooking",function(e){for(var i=[],t=0;23>t;t++)i.push(require("ui/booking")({parent:a}));var a=require("ui/window")({title:"This booking (#"+(e.payload+1)+")",subtitle:"Account: XYZ",children:[require("vendor/pageflip.widget")({pages:i,startPage:e.payload,onflipend:function(e){ActionBar.setTitle("Booking (#"+(e.current+1)+")")}})],onopen:require("ui/main.actionbar")});a.open(),setTimeout(function(){a.children[0].peakNext(!0)},700)})}return e};