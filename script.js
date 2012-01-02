var plugin_slug = location.pathname.match( /\/extend\/plugins\/([a-z0-9-]+)\//);
if( plugin_slug && plugin_slug[1] && plugin_slug[1] != 'tags' )
	jQuery( "#plugin-description" ).append( '<br class="clear"><p class="button" style="background:#21759b;"><a href="http://plugins.svn.wordpress.org/' + location.pathname.match( /\/extend\/plugins\/([a-z0-9-]+)\//)[1] + '/">SVN Repository</a></p>' );