var plugin_slug = location.pathname.match(/\/plugins\/([a-z0-9-]+)\//) || location.pathname.match( /\/support\/plugin\/([a-z0-9-]+)\/?/ );
if( plugin_slug && plugin_slug[1] && plugin_slug[1] != 'tags' ) {
	// Get the container
	var container = document.querySelector("#plugin-description");

	// Get the favorite button
	var favorite = document.querySelector(".plugin-favorite");

	// Create some spacing
	var clearBreak = document.createElement('br');
	clearBreak.className='clear';

	// build our link
	var svnLink = 'http://plugins.svn.wordpress.org/' + plugin_slug[1] + '/';
	var anchor = document.createElement('a');
	anchor.href=svnLink;
	anchor.appendChild( document.createTextNode('SVN Repository') );

	// build our paragraph
	var paragraph = document.createElement('p');
	paragraph.className='button';
	paragraph.style.background = '#21759b';
	paragraph.style.marginTop = '5px';
	paragraph.appendChild(anchor);

		if( container ) {
			// Insert our spacing
		container.appendChild(clearBreak);

		// attach it
		container.appendChild(paragraph);
		}

		if( favorite ) {
			// Insert our spacing
			favorite.parentNode.insertBefore(clearBreak, favorite);

			// Sneak it in between the download link and favorite button
			favorite.parentNode.insertBefore(paragraph, favorite);
		}
}
