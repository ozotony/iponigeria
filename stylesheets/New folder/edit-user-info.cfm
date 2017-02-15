<cfinclude template="../../adminpanel/css/validateuserpopup.cfm">
<cfif isdefined("url.id") and isValid("integer", url.id)>
	<cfset getfullname = users.getfullname(url.id)>
    <cfif url.type eq 'user'>
        <cfset userdetails = users.getEachUser(url.id)>
    </cfif>
<cfelse>
	<cfset structclear(session)>
    <cflocation url="../../adminpanel/css/index.cfm" addtoken="no">
</cfif>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Edit <cfoutput>#getfullname#</cfoutput> Information</title>
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	background-color: #FFFFFF;
}
-->
</style>
<link href="../../adminpanel/css/css/reload.css" rel="stylesheet" type="text/css" />
<link href="../../adminpanel/css/css/cAdmin.css" rel="stylesheet" type="text/css" />
<link href="../../adminpanel/css/css/corpcss.css" rel="stylesheet" type="text/css" />
<script src="../../SpryAssets/SpryValidationTextField.js" type="text/javascript"></script>
<script src="../../SpryAssets/SpryValidationSelect.js" type="text/javascript"></script>
<script type="text/JavaScript">
<!--
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


//-->
</script>
<link href="../../SpryAssets/SpryValidationTextField.css" rel="stylesheet" type="text/css" />
<link href="../../SpryAssets/SpryValidationSelect.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<!--
.style1 {
	color: #FF0000;
	font-weight: bold;
	font-size: 12px;
}
-->
</style>
</head>

<body>
<cfinclude template="../../adminpanel/css/includes/include_banner.cfm">
<cfif url.type eq 'user'>
	<form action="../../adminpanel/css/update-user-info.cfm" method="post" enctype="multipart/form-data" name="suggestion" id="suggestion">
		<div class="formatDiv">
<table width="700" border="0" align="center" cellpadding="4" cellspacing="1">
                            <cfif isdefined("url.mess") and url.mess neq ''>
                            <tr>
                              <td colspan="2" valign="top"><span class="style1"><cfoutput>#url.mess#</cfoutput></span></td>
                            </tr>
                            </cfif>
                            <tr>
                              <td colspan="2" valign="top"><strong>Edit User Information</strong></td>
                            </tr>
                            <tr>
                              <td valign="top"><strong>Surname Name </strong></td>
                              <td width="306">
                                <cfoutput><span id="sprytextfield1">
                                  <input type="text" name="sname" id="text1" value="#userdetails.lastname#" />
                              <span class="textfieldRequiredMsg">A value is required.</span></span></cfoutput>                              </td>
   		</tr>
                            <tr>
                              <td valign="top"><strong>First Name</strong><em></em></td>
                              <td>
                                <cfoutput><span id="sprytextfield2">
                                  <input type="text" name="fname" id="text2" value="#userdetails.firstName#" />
                              <span class="textfieldRequiredMsg">A value is required.</span></span></cfoutput>                              </td>
		</tr>
                            <tr>
                              <td valign="top"><strong>Mobile Number</strong></td>
                              <td>
                                <cfoutput><span id="sprytextfield3">
                                  <input type="text" name="mobile" id="text5" value="#userdetails.mobile#" />
                              <span class="textfieldRequiredMsg">A value is required.</span></span></cfoutput>                              </td>
		</tr>
                            <tr>
                              <td valign="top"><strong>Email Address</strong> </td>
                              <td>
                              <cfoutput><span id="sprytextfield4">
                              <input type="text" name="emailadd" id="text4" value="#userdetails.email#" />
                              <span class="textfieldRequiredMsg">A value is required.</span><span class="textfieldInvalidFormatMsg">Invalid format.</span></span></cfoutput>                              </td>
		</tr>
                            
                            <tr>
                            <cfset getAcctType = users.getAcctType()>
                              <td valign="top"><strong>Account Type</strong></td>
                              <td>
                                <span id="spryselect1">
                                <select name="accttype" id="select3">
                                	<cfoutput><option value="#userdetails.acctTypeId#">#userdetails.acctType#</option></cfoutput>
                                    <option value="">---Select User's Type of Account---</option>
									<cfoutput query="getAcctType">
                                    <option value="#acctTypeId#">#acctTypeName#</option>
                                    </cfoutput>
                                </select>
                                <span class="selectRequiredMsg">Please select an item.</span></span>
                             </td>
    						</tr>
                            
                            <tr>
                              <td valign="top"><strong>Town</strong></td>
                              <td>
                                <cfoutput><input type="text" name="town" id="text3" value="#userdetails.town#" /></cfoutput>
                             </td>
</tr>
                            
                            <tr>
                              <td valign="top"><strong>State</strong></td>
                              <td>
                                <cfset rsState = users.getState()>
                                <span id="spryselect2">
                                <select name="state" id="state" class="loginSelect">
                                  <cfoutput>
                                    <option value="#userdetails.stateid#">#userdetails.state#</option>
                                  </cfoutput>
                                  <option value="">Select your state of location</option>
                                  <cfoutput query="rsState">
                                    <option value="#stateid#">#state#</option>
                                  </cfoutput>
                                  <option value="38">Others</option>
                                </select>
                                <span class="selectRequiredMsg">Please select an item.</span></span></td>
    						</tr>
                            
                            <tr>
                              <cfset rsCountry = users.getCountry()>
                              <td valign="top"><strong>Country</strong></td>
                              <td><span id="spryselect3">
                                <select name="country" id="country" class="loginSelect">
                                  <cfoutput>
                                    <option value="#userdetails.short_code#">#userdetails.country#</option>
                                  </cfoutput>
                                  <option value="">---Select your Country---</option>
                                  <cfoutput query="rsCountry">
                                    <option value="#short_code#">#country_name#</option>
                                  </cfoutput>
                                </select>
                              <span class="selectRequiredMsg">Please select an item.</span></span></td>
		</tr>
                            
                            <tr>
                              <td valign="top"><strong>E-PIN PLACE Account Status</strong></td>
                              <td><span id="spryselect4">
                                <select name="status" id="select1">
                                  <cfif userdetails.locked eq 1>
                                    <option value="1" selected="selected">Currently Active</option>
                                    <cfelse>
                                    <option value="0" selected="selected">Currently Locked</option>
                                  </cfif>
                                  <option value="">---Enable/Disable Account---</option>
                                  <option value="1">Enable Account</option>
                                  <option value="0">Disable Account</option>
                                </select>
                              <span class="selectRequiredMsg">Please select an item.</span></span></td>
		</tr>
                            
                            <tr>
                              <td valign="top"><strong>Activated</strong></td>
                              <td valign="top"><cfoutput>
                                	<cfif userdetails.activated eq 1>Yes
                                    <cfelse>
                                    No
                                    </cfif>
                              </cfoutput></td>
                            </tr>
                            
<tr>
                              <td valign="top"><strong>Date Registered</strong></td>
                              <td><cfoutput>#dateFormat(userdetails.datereg, "dd-mmm-yyyy")#</cfoutput></td>
                            </tr>
                            
                            <tr>
                              <td valign="top"><strong>SMS Credit Balance</strong></td>
                              <td><cfoutput>#userdetails.smsbalance#</cfoutput>
                              <cfoutput><input type="hidden" name="userid" id="hiddenField2" value="#url.id#" />
                              </cfoutput></td>
                            </tr>
                            <tr>
                              <td valign="top"><strong>Can I currently receive mail from E-PIN PLACE</strong></td>
                              <td><span id="spryselect5">
                                <select name="mailstatus" id="select2">
                                  <cfif userdetails.mailSubscribe eq 1>
                                    <option value="1" selected="selected">Yes</option>
                                    <cfelse>
                                    <option value="0" selected="selected">No</option>
                                  </cfif>
                                  <option value="">---Enable/Disable mails from E-PIN PLACE---</option>
                                  <option value="1">Enable</option>
                                  <option value="0">Disable</option>
                                </select>
                              <span class="selectRequiredMsg">Please select an item.</span></span></td>
    </tr>
                            <tr>
                             <td align="right"><input name="close" type="button" class="orange-brd" id="Back" value="Close" onClick="window.close();" /></td>
                              <td><input name="Submit" type="submit" class="orange-brd" value="Submit" /></td>
                            </tr>
                          </table>
                          </div>
  </form>
<cfelseif url.type eq 'voucher'>

	<form action="../../adminpanel/css/update-voucher-info.cfm" method="post" enctype="multipart/form-data" name="suggestion" id="suggestion">
<div class="formatDiv">
<table width="580" border="0" align="center" cellpadding="4" cellspacing="1">
      <cfif isdefined("url.mess") and url.mess neq ''>
        <tr>
          <td colspan="2" valign="top"><span class="style1"><cfoutput>#url.mess#</cfoutput></span></td>
                            </tr>
      </cfif>
                            <tr>
                              <td colspan="2" valign="top"><strong>Edit User Pin Details</strong> <cfoutput><input name="userid" type="hidden" value="#url.id#" /> <input name="historyid" type="hidden" value="#url.historyid#" /></cfoutput></td>
                            </tr>
                            <tr>
                              <td width="280" valign="top"><strong>Voucher Type</strong></td>
                              <td><cfoutput>#getUserPin.voucher# <input name="vouchername" type="hidden" value="#getUserPin.voucher#" /></cfoutput></td>
                            </tr>
                            <tr>
                              <td valign="top"><strong>Pin </strong></td>
                              <td width="401"><span id="sprytextfield5">
                                <cfoutput><input type="text" name="pin" id="pin" size="30" value="#getUserPin.pin#" /></cfoutput>
                              <span class="textfieldRequiredMsg">A value is required.</span></span></td>
                    </tr>
                            <tr>
                              <td valign="top"><strong>Serial</strong><em></em></td>
                              <td><span id="sprytextfield6">
                                <cfoutput><input type="text" name="serial" id="serial" size="30" value="#getUserPin.serial#" /></cfoutput>
                              <span class="textfieldRequiredMsg">A value is required.</span></span></td>
            </tr>
                            <tr>
                              <td valign="top"><strong>Date</strong></td>
                              <td><cfoutput>#dateformat(getUserPin.datebought, 'dd-mmm-yy')#</cfoutput></td>
                            </tr>
                            <tr>
                              <td valign="top"><strong>Amount</strong></td>
                              <td><cfoutput>#LSCurrencyFormat(getUserPin.amount, "none")#</cfoutput></td>
    </tr>
                            <tr>
                             <td align="right"><input name="close" type="button" class="orange-brd" id="Back" value="Close" onClick="window.close();" /></td>
                              <td><input name="Submit" type="submit" class="orange-brd" value="Submit" /></td>
                            </tr>
      </table>
      </div>
</form>


</cfif>
    <script type="text/javascript">
<!--
var sprytextfield5 = new Spry.Widget.ValidationTextField("sprytextfield5");
var sprytextfield6 = new Spry.Widget.ValidationTextField("sprytextfield6");
var sprytextfield1 = new Spry.Widget.ValidationTextField("sprytextfield1");
var sprytextfield2 = new Spry.Widget.ValidationTextField("sprytextfield2");
var spryselect1 = new Spry.Widget.ValidationSelect("spryselect1");
var sprytextfield3 = new Spry.Widget.ValidationTextField("sprytextfield3");
var sprytextfield4 = new Spry.Widget.ValidationTextField("sprytextfield4", "email");
var spryselect2 = new Spry.Widget.ValidationSelect("spryselect2");
var spryselect3 = new Spry.Widget.ValidationSelect("spryselect3");
var spryselect4 = new Spry.Widget.ValidationSelect("spryselect4");
var spryselect5 = new Spry.Widget.ValidationSelect("spryselect5");
//-->
</script>
</body>
</html>
