<cfcomponent extends="Model" output="false">
	<cffunction name="init">
		<!---set up associations--->
		<!---set up validations--->
		<cfset validatesFormatOf(property="emailaddress", type="email")>
		<cfset validatesUniquenessOf(property="emailaddress")>
		<cfset validatesPresenceOf(property="PhoneNumber", message="Phone number can't be empty")>		
		<cfset validatesLengthOf(property="PhoneNumber", minimum="8", message="Phone number must be exactly 8 digits long")>
		<cfset validatesLengthOf(property="password", minimum="8", message="Password must be at least 8 characters long")>
        <cfset validatesConfirmationOf(property="password")>
		<cfset validatesFormatOf(property="password", regEx="^(?=.*\d).{8,512}$", message="Your password must contain at least one number and be at least 8 characters long")>
		<cfset validatesPresenceOf(property="emailaddress", message="Please enter your email address")>
        <cfset validatesPresenceOf(property="surname", message="Please enter your surname")>
		 <cfset validatesPresenceOf(property="othernames", message="Please enter your other names")>
        <!---set up callbacks--->
	</cffunction>
    
    
  <cffunction name="sendmail" access="public" returntype="string">
    	<cfargument name="email" type="any" required="yes">
		<cfargument name="subject" type="any" required="yes">
        	<cfargument name="messagebody" type="any" required="yes">
		<!---send email to email handler--->
		<cfmail FROM="The Commercial Law Department Trademarks Patents and Designs Registry Ministry of Trade and Investment<support@iponigeria.com>" TO="#email#" bcc="jamesonkeju@yahoo.com" SUBJECT="#subject#"  type="html" SERVER="mail.iponigeria.com"  username="email@iponigeria.com" password="p@ssword">
		<cfoutput>'#messagebody#'</cfoutput>
				
		</cfmail>

	</cffunction>
    
   

    <cffunction name="generateSecretString" access="private" returntype="string">
    	<cfargument name="len" default="4" required="no">
        
        <cfset msg = ''>
        
        <cfloop index="i" from="1" to="4">
        	<cfset z = randrange(1,2)>
            <cfif z eq 1>
				<cfset num = randrange(49, 57)>
            <cfelse>
            	<cfset num = randrange(97, 122)>
			</cfif>
            <cfset msg = msg & chr(num)>   
        </cfloop>
        <cfreturn msg>
    </cffunction>
    
    
</cfcomponent>
