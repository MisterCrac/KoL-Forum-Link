// ==UserScript==
// @name        KoL Forum Link
// @namespace   https://github.com/MisterCrac/KoL-Forum-Link/
// @description Greasemonkey script for adding the missing link to the KoL forums
// @include     *www.kingdomofloathing.com/topmenu.php
// @include     http://127.0.0.1:60080/topmenu.php
// @version     0.1
// @grant       none
// @author      Mr_Crac (#689692)
// ==/UserScript==

var searchstring = 'donate';
var anchors = document.getElementsByTagName('a');
	 
for (i=0; i<anchors.length; i++)
{
    if (anchors[i].innerHTML == searchstring)
    {
        var space           = document.createTextNode(' ');
        var forumlink       = document.createElement('a');
        forumlink.href      = 'http://forums.kingdomofloathing.com/';
        forumlink.innerHTML = 'forums';
        forumlink.target    = '_blank';
        
        anchors[i].parentNode.insertBefore(forumlink, anchors[i].nextSibling);
        anchors[i].parentNode.insertBefore(space, forumlink);
        break;
    }
}
