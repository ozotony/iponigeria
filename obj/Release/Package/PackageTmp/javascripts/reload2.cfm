
<cfquery name="getPinDetails" datasource="#get("dataSourceName")#">
			select * from pinsfees where pintypeid = 		<cfqueryparam value="#ch#" cfsqltype="cf_sql_numeric">    order by id asc
</cfquery>

<Cfif getPinDetails.recordcount eq 0>
<select name="cityList" class="formfields">

<option >No Associated Pin Type Was Found</option>

</select>

<cfelse>
<select name="cityList" class="formfields">
<cfoutput query="getPinDetails">
<option value="#id#">#pindesc# - NGN#numberformat(totalcost,',')#</option>
</cfoutput>
</select>
</Cfif>
