/**
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

	--------------------------------------------------------------------
	
	Simple banner rotator. Version: 1.4.0
	Download and support: http://www.spyka.net 
	(c) Copyright 2008, 2009 spyka Web Group
	

	For full documentation:  http://www.spyka.net/docs/simple-banner-rotator
	For support:			 http://www.spyka.net/forums


**/

//								EDIT FROM HERE
///////////////////////////////////////////////////////////////////////////////////

/**
		Script settings
**/

var settings = {
	
	'force_size':			0,         		// 	if set to 1 all banners will be resized to the width and height in the next to settings
	'img_width':			468,			//	width to resize all banners to, only takes effect if above is 1
	'img_height':			60, 			// 	height to resize all banners to, only takes effect if above is 1
	
	'refresh_time':			0,			//	the seconds between refreshs of the banners - use 0 to disable
	'refresh_max':			2,				//	maximum number of refreshs on each page load
	
	'duplicate_banners':	1,				//	keep as 0 to make sure the same banner won't show on the same page. will only take effect
											//  if show_banners(); is used more than once. You must make sure you have enough banners to fill
											//  all the slots else the browser may freeze or give a stack overflow error
	
	'location_prefix': 		'adLocation-',	//	The prefix of the IDs of the <div> which wraps the banners - this div is generated dynamically.
											//  a number will be added on the end of this string. adLocation- was used by default before version 1.4.x
											
	'location_class':		'fitnessammoshowcase',			//  A class to add to all of the <div>s which wrap the banners, ideal to use for styling banners - use .swb img in your CSS	
	
	'window': 				'_blank',		//	Window to open links in, _self = current, _blank = new. Use _top if in a frame!		
	
	'default_ad_loc':		'default'		//	The default adLocation. This is assigned to any banners not given an adLocation in the below banner list
											//  There is no real reason to need to change this
}


/**
		Banners
**/
// banner list syntax: new banner(website_name, website_url, banner_url, show_until_date, adlocation),  DATE FORMAT: dd/mm/yyyy
// if you're not using adlocations just leave it empty like '' as in the last example here
// to make sure a banner is always rotating, just set the date far into the future, i.e. year 3000

var banners = [
 




new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-1.png', '30/04/2319',	'160x600'),

new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-2.png', '30/04/2319',	'160x600'),
new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-11.png', '30/04/2319',	'160x600'),
new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-10.png', '30/04/2319',	'160x600'),
new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-9.png', '30/04/2319',	'160x600'),
new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-8.png', '30/04/2319',	'160x600'),
new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-7.png', '30/04/2319',	'160x600'),
new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-6.png', '30/04/2319',	'160x600'),
new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-5.png', '30/04/2319',	'160x600'),
new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-4.png', '30/04/2319',	'160x600'),
new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b250-3.png', '30/04/2319',	'160x600'),







new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b300-250-2.png', '10/04/2319', '300x250'),

new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b300-250-11.png', '10/04/2319', '300x250'),

new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b300-250-10.png', '10/04/2319', '300x250'),

new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b300-250-9.png', '10/04/2319', '300x250'),

new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b300-250-8.png', '10/04/2319', '300x250'),

new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b300-250-7.png', '10/04/2319', '300x250'),

new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b300-250-6.png', '10/04/2319', '300x250'),

new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b300-250-5.png', '10/04/2319', '300x250'),

new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b300-250-4.png', '10/04/2319', '300x250'),

new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b300-250-3.png', '10/04/2319', '300x250'),



 




new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b728-11.png', '10/04/2319', '728x90'),


new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b728-9.png', '10/04/2319', '728x90'),


new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b728-10.png', '10/04/2319', '728x90'),


new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b728-2.png', '10/04/2319', '728x90'),


new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b728-3.png', '10/04/2319', '728x90'),


new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b728-4.png', '10/04/2319', '728x90'),


new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b728-5.png', '10/04/2319', '728x90'),


new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b728-6.png', '10/04/2319', '728x90'),


new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b728-7.png', '10/04/2319', '728x90'),


new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/b728-8.png', '10/04/2319', '728x90'),





new banner('Buy Snapbacks at Cranium Fitteds', 'http://www.craniumfitteds.com/', 'http://blog.craniumfitteds.com/wp-content/uploads/468x60.gif', '10/04/2319', '468x60'),



]

//         				There is no need to edit below here
///////////////////////////////////////////////////////////////////////////////////
var used=0;var location_counter=0;var refresh_counter=1;var map=new Array();function banner(a,b,c,d,e){this.name=a;this.url=b;this.image=c;this.date=d;this.active=1;this.oid=0;if(e!=''){this.loc=e}else{this.loc=settings.default_ad_loc}}function show_banners(a){location_counter=location_counter+1;if(a!=''&&a!=undefined){map[location_counter]=a}else{map[location_counter]=settings.default_ad_loc}var b='<div id="'+settings.location_prefix+location_counter+'" class="'+settings.location_class+'"></div>';document.write(b);display_banners(location_counter)}function display_banners(a){var b=new Array();if(a==''||!a||a<0){return}var c=banners.length;if((c==used)&&settings.duplicate_banners==0){return}for(i=0;i<(banners.length);i++){banners[i].oid=i;if((banners[i].loc==map[a])&&(banners[i].active==1)){b.push(banners[i])}}var d=Math.floor(Math.random()*b.length);var e=b[d];var f=(settings.force_size==1)?' width="'+settings.img_width+'" height="'+settings.img_height+'"':'';var g='<a href="'+e.url+'" title="'+e.name+'" target="'+settings.window+'"><img border="0" src="'+e.image+'"'+f+' alt="'+e.name+'" /></a>';var h=new Date();var j=e.date;j=j.split('/',3);var k=new Date();k.setFullYear(parseInt(j[2]),parseInt(j[1])-1,parseInt(j[0]));if((h<k)&&e.active==1){var l=document.getElementById(settings.location_prefix+a);if(l==null){alert('spyka Webmaster banner rotator\nError: adLocation doesn\'t exist!')}else{l.innerHTML=g;if(settings.duplicate_banners==0){banners[e.oid].active=0;used++}return}}else{display_banners(a)}return}function refresh_banners(){if((refresh_counter==settings.refresh_max)||settings.refresh_time<1){clearInterval(banner_refresh)}used=0;for(j=0;j<(banners.length);j++){banners[j].active=1}for(j=1;j<(location_counter+1);j++){display_banners(j)}refresh_counter++}var banner_refresh=window.setInterval(refresh_banners,settings.refresh_time);
