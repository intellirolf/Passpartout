var GLOBALS=require("GLOBALS");module.exports=function(){var a=(arguments[0]||{},Ti.UI.createScrollView({layout:"vertical",backgroundColor:"white",scrollType:"vertical",height:Ti.UI.FILL,contentWidth:Ti.UI.FILL,contentHeight:Ti.UI.SIZE})),e=parseInt(.4*GLOBALS.SCREENWIDTH),t="http://lorempixel.com/g/"+e+"/"+e+"/?"+Math.random();return console.log(t),a.add(Ti.UI.createImageView({image:t,top:10,defaultImage:"",hires:!0,borderRadius:e/2,width:e,height:e})),a.add(Ti.UI.createLabel({text:require("vendor/loremipsum")(400),left:10,top:10,right:10,height:Ti.UI.SIZE,color:"#444",font:{fontSize:22}})),a};