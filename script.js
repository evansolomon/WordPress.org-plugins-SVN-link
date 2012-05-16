var plugin_slug = location.pathname.match( /\/extend\/plugins\/([a-z0-9-]+)\//);
if( plugin_slug && plugin_slug[1] && plugin_slug[1] != 'tags' ){
    // Get the favorite button
    var favorite = document.querySelector(".plugin-favorite");
    
    // Create some spacing
    var clearBreak = document.createElement('br');
    clearBreak.className='clear';
    favorite.parentNode.insertBefore(clearBreak);

    // build our link
    var svnLink = 'http://plugins.svn.wordpress.org/' + location.pathname.match( /\/extend\/plugins\/([a-z0-9-]+)\//)[1] + '/';
    var anchor = document.createElement('a');
    anchor.href=svnLink;
    anchor.appendChild( document.createTextNode('SVN Repository') );

    // build our paragraph
    var paragraph = document.createElement('p');
    paragraph.className='button';
    paragraph.style.background = '#21759b';
    paragraph.style.marginTop = '5px';
    paragraph.appendChild(anchor);

    // sneak it in between the download link and favorite button
		favorite.parentNode.insertBefore(paragraph, favorite);

}
