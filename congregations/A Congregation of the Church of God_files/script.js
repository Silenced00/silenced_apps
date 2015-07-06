var MenuOn=0, MenuSH = new Array, TimeId, MainDivs=new Array('about_us','contact_us','literature','multimedia'), MainImgs=new Array('tm2','tm8','tm4','tm3'), imgMenu='img/menu/';

browser_name = navigator.appName;
browser_version = parseFloat(navigator.appVersion);

if (browser_name == "Netscape" && browser_version >= 3.0) { roll = 'true'; }
else if (browser_name == "Microsoft Internet Explorer" && browser_version >= 3.0) { roll = 'true'; }
else { roll = 'false'; }

function over(img,ref) { if (roll == 'true') { document.images[img].src = ref; } }
function out(img,ref)  { if (roll == 'true') { document.images[img].src = ref; } }

function preloadImg(file){
  image = new Image();
  image.src = file;
}

function rol_img() {	
	preloadImg('img/menu/contact_us-on.gif');
	preloadImg('img/menu/feast_of_tabemacles-on.gif');
	preloadImg('img/menu/church_members-on.gif');
	preloadImg('img/menu/church_events-on.gif');
	preloadImg('img/menu/literature-on.gif');
	preloadImg('img/menu/multimedia-on.gif');
	preloadImg('img/menu/home-on.gif');
	preloadImg('img/menu/about_us-on.gif');
}

function showText() {
	m=new Array,vGod=new Array;
	t_days=0, flag=0;
	
	m[0]=31; m[1]=28;
	m[2]=31; m[3]=30;
	m[4]=31; m[5]=30;
	m[6]=31; m[7]=31;
	m[8]=30; m[9]=31;
	m[10]=30; m[11]=31;
	
	vGod[1]=2004; vGod[2]=2008;
	vGod[3]=20012; vGod[4]=2016;
	vGod[5]=2020; vGod[6]=2024;
	vGod[7]=2028; 
	
	cur_date = new Date();
	day = cur_date.getDate();
	month=cur_date.getMonth(); //begin from 0
	year=cur_date.getFullYear();

	for (var j=0; j<month; j++) {
		if (year==vGod[j]) {
			flag=1;
		}
	}
	
	for (var i=0; i<month; i++) {
		if ( (i==1)&&(flag==1) ) {
			m[i]=29;
		}
		t_days=t_days+m[i];
	}
	t_days=t_days+day;
	if ( (!psalm[t_days]) || (!verse[t_days]) ) {
		n=psalm.length-1;
		t_days=get_random(n);
	}	
	text='<h1>Verse of the Day: '+psalm[t_days]+'</h1><h2>"'+verse[t_days]+'"</h2>';
	document.write(text);
}

function get_random(value)
{
    var ranNum= Math.round(Math.random()*value);
    return ranNum;
}


function GoPage (s) {
	for (var i = 0; i < document.getElementById(s).length; i++) {
		if (document.getElementById(s)[i].selected) {
			//alert (document.getElementById(s)[i].value);
        var IdNumer=document.getElementById(s)[i].value;
        add_click(IdNumer,'_parent');
		}
	}
}

function navig_d (par,type,nIdDiv,source) {
var lay=document.getElementById(par);
if (type==0) {
	if (source) {
		over(source,nIdDiv);
	}
MenuSH[par]=1;
MenuOn=1;
clearTimeout(TimeId);
//lay.style.display="block";
lay.style.visibility="visible";
} //end if type=0

if (type==1) {
MenuSH[par]=0;
if (source=="div") {
	MenuOn=0;
	clearTimeout(TimeId);
	TimeId=setTimeout('HideAllDivs()',0);
} else {
	if (MenuOn) {
		//clearTimeout(TimeId);
		TimeId=setTimeout('MenuOff("'+par+'","'+nIdDiv+'","'+source+'")',0);
	}
}
}//end if type==1

}
function hideChild(arr,current) {
		for (i=0; i < arr.length; i++) {	
			//document.getElementById(arr[i]).style.display="none";
			if (document.getElementById(arr[i]).style.visibility=="visible") {
				if (MainDivs[i]!=current) {
					over(MainImgs[i],imgMenu+MainDivs[i]+'.gif');			
				}
			}
			document.getElementById(arr[i]).style.visibility="hidden";			
		}
}

function HideAllDivs () {
	if (!MenuOn) {
		for (i=0; i < MainDivs.length; i++) {
			//document.getElementById(MainDivs[i]).style.display="none";
			document.getElementById(MainDivs[i]).style.visibility="hidden";
		}
	}
}

function MenuOff (lid,img,source) {
	if ( (!MenuSH[lid]) ) {	
		//document.getElementById(lid).style.display="none";
		document.getElementById(lid).style.visibility="hidden";
		if (source) {
			over(source,img);
		}
	}
}

function HideShow (par,t) {
var lay=document.getElementById(par);
if (t==0) { 
	//lay.style.display="block";
	lay.style.visibility="visible"; 
	}
if (t==1) {
	//lay.style.display="none"; 
	lay.style.visibility="hidden";
	}
}



function add_click (url,target) {
if (url) {
//alert("Debug:"+url);
//alert("Debug:"+target);
if (target=="_parent") {
parent.location.href=url;
}
if (target=="_blank") {
window.open(url);
}
if (target=="_self") {
location.href=url;
}
if (target=="_top") {
top.location.href=url;
}
}//end if !url
}

//cookies
function Cookie(document, name, hours, path, domain, secure)
{
    this.$document = document;
    this.$name = name;
    if (hours)
        this.$expiration = new Date((new Date()).getTime() + hours*3600000);
    else this.$expiration = null;
    if (path) this.$path = path; else this.$path = null;
    if (domain) this.$domain = domain; else this.$domain = null;
    if (secure) this.$secure = true; else this.$secure = false;
}

function _Cookie_store()
{
    var cookieval = "";
    for(var prop in this) {

        if ((prop.charAt(0) == '$') || ((typeof this[prop]) == 'function')) 
            continue;
        if (cookieval != "") cookieval += '&';
        cookieval += prop + ':' + escape(this[prop]);
    }
    var cookie = this.$name + '=' + cookieval;
    if (this.$expiration)
        cookie += '; expires=' + this.$expiration.toGMTString();
    if (this.$path) cookie += '; path=' + this.$path;
    if (this.$domain) cookie += '; domain=' + this.$domain;
    if (this.$secure) cookie += '; secure';

    this.$document.cookie = cookie;
}

function _Cookie_load()
{
    var allcookies = this.$document.cookie;
    if (allcookies == "") return false;

    var start = allcookies.indexOf(this.$name + '=');
    if (start == -1) return false;   
    start += this.$name.length + 1;  
    var end = allcookies.indexOf(';', start);
    if (end == -1) end = allcookies.length;
    var cookieval = allcookies.substring(start, end);
    
    
    
    var a = cookieval.split('&');  
    for(var i=0; i < a.length; i++)  
        a[i] = a[i].split(':');
    
    for(var i = 0; i < a.length; i++) {
        this[a[i][0]] = unescape(a[i][1]);
    }
    
    return true;
}

function _Cookie_remove()
{
    var cookie;
    cookie = this.$name + '=';
    if (this.$path) cookie += '; path=' + this.$path;
    if (this.$domain) cookie += '; domain=' + this.$domain;
    cookie += '; expires=Fri, 02-Jan-1970 00:00:00 GMT';
    this.$document.cookie = cookie;
}