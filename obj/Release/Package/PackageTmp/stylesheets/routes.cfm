<!---
	Here you can add routes to your application and edit the default one.
	The default route is the one that will be called on your application's "home" page.
--->
<cfset addRoute(name="home", pattern="", controller="main", action="index")>
<cfset addRoute(name="content", pattern="/About Us", controller="main", action="content")>
<cfset addRoute(name="site", pattern="/site/[key]", controller="main", action="site")>