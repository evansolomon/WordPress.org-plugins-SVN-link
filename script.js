var plugin_slug = location.pathname.match( /\/extend\/plugins\/([a-z0-9-]+)\//);
if( plugin_slug && plugin_slug[1] && plugin_slug[1] != 'tags' ){
    // Get the container
    var container = document.querySelector("#plugin-description");
    
    // Create some spacing
    var clearBreak = document.createElement('br');
    clearBreak.className='clear';
    container.appendChild(clearBreak);

    // build our link
    var svnLink = 'http://plugins.svn.wordpress.org/' + location.pathname.match( /\/extend\/plugins\/([a-z0-9-]+)\//)[1] + '/';
    var anchor = document.createElement('a');
    anchor.href=svnLink;
    anchor.appendChild( document.createTextNode('SVN Repository') );

    // build our paragraph
    var paragraph = document.createElement('p');
    paragraph.className='button';
    paragraph.style.background = '#21759b';
    paragraph.appendChild(anchor);

    // attach it
    container.appendChild(paragraph);

}
