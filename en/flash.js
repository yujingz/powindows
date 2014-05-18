function fnWrite(strTarget){
document.write(strTarget);
}
function fnEmbedMainFlash(strParam,width,height){
var strObject;

strObject ='<object classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width=' + width + ' height=' + height + '>';
strObject = strObject +'<param name=movie value="' + strParam+ '">';
strObject = strObject +'<param name=quality value=high>';
strObject = strObject +'<param name=wmode value=transparent>';
strObject = strObject +'<embed src="' + strParam+ '" quality=high pluginspage="http://www.macromedia.com/go/getflashplayer type=application/x-shockwave-flash" width=' + width + ' height=' + height + '></embed></object>';


fnWrite(strObject);
}