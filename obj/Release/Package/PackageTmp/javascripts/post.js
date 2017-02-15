function postwith (to,p) {
  var myForm = document.createElement("form");
  myForm.method="post" ;
  myForm.action = to ;
  for (var k in p) {
    var myInput = document.createElement("input") ;
    myInput.setAttribute("name", k) ;
    myInput.setAttribute("value", p[k]);
    myForm.appendChild(myInput) ;
  }
  document.body.appendChild(myForm) ;
  myForm.submit() ;
  document.body.removeChild(myForm) ;
}

		function doPost(transID,amt,agent,xgt,cname,agentemail,agentpnumber,applicantname,product_title)
		{
		postwith('http://tm.cldng.com/xindex.aspx',{transID:transID,amt:amt,agent:agent,xgt:xgt,cname:cname,agentemail:agentemail,agentpnumber:agentpnumber,applicantname:applicantname,product_title:product_title});
		}
		
		
// http://tm.cldng.com/xtm/xindex.aspx and Generic Form URL : http://tm.cldng.com/xtm/gf/xindex.aspx 

function NonGenericTradeMarks(transID, amt, agt, xgt, applicantname, applicantemail,applicantpnumber, agentname, agentemail, agentpnumber, product_title,item_code)
{
	postwith('http://tm.cldng.com/xindex.aspx',{
													transID:transID,
													amt:amt,
													agt:agt,
													xgt:xgt,
													applicantname:applicantname,
													applicantemail:applicantemail,
													applicantpnumber:applicantpnumber,
													agentname:agentname,
													agentemail:agentemail,
													agentpnumber:agentpnumber,
													product_title:product_title,
													item_code:item_code
	});
}
	
	
	function GenericTradeMarks(transID, amt, agt, xgt, applicantname, applicantemail,applicantpnumber, agentname, agentemail, agentpnumber, product_title,item_code)
{
	postwith('http://tm.cldng.com/gf/xindex.aspx',{
													transID:transID,
													amt:amt,
													agt:agt,
													xgt:xgt,
													applicantname:applicantname,
													applicantemail:applicantemail,
													applicantpnumber:applicantpnumber,
													agentname:agentname,
													agentemail:agentemail,
													agentpnumber:agentpnumber,
													product_title:product_title,
													item_code:item_code
	});
}
	
	
	
	function P003Function(transID, amt, agt, xgt, applicantname, applicantemail,applicantpnumber, agentname, agentemail, agentpnumber, product_title,item_code)
{
	postwith('http://pt.cldng.com/xindex_ren.aspx',{
													transID:transID,
													amt:amt,
													agt:agt,
													xgt:xgt,
													applicantname:applicantname,
													applicantemail:applicantemail,
													applicantpnumber:applicantpnumber,
													agentname:agentname,
													agentemail:agentemail,
													agentpnumber:agentpnumber,
													product_title:product_title,
													item_code:item_code});
}
	
		
		function doAssignmentPost(transID, amt, agent, xgt, cname, agentemail) {
		postwith('http://tm.cldng.com/p2/ass_index.aspx', { transID: transID, amt: amt, agent: agent, xgt: xgt, cname: cname, agentemail: agentemail});
		}
		
		
		function doNameChangePost(transID, amt, agent, xgt, cname, agentemail) {
		postwith('http://tm.cldng.com/p2/nc_index.aspx', { transID: transID, amt: amt, agent: agent, xgt: xgt, cname: cname, agentemail: agentemail});
		}
		
		
		function doRenewalPost(transID, amt, agent, xgt, cname, agentemail) {
		postwith('http://tm.cldng.com/xtm/p2/r_index.aspx', { transID: transID, amt: amt, agent: agent, xgt: xgt, cname: cname, agentemail: agentemail});
		}
		
		
		//Patent
		function doPostPatent(transID,amt,agent,xgt,cname,agentemail,agentpnumber,applicantname,product_title,pc)
		{
		postwith('http://pt.cldng.com/xindex.aspx',{transID:transID,amt:amt,agent:agent,xgt:xgt,cname:cname,agentemail:agentemail,agentpnumber:agentpnumber,applicantname:applicantname,product_title:product_title,pc:pc});
		}
		
		//General  Trademark General forms:
		function GeneralPostTradeMark(transID, amt, agt, xgt, cname, agentemail, agentpnumber, applicantname, product_title,item_code)
		{
		postwith('http://tm.cldng.com/gf/xindex.aspx',{transID:transID,amt:amt,agt:agt,xgt:xgt,cname:cname,agentemail:agentemail,agentpnumber:agentpnumber,applicantname:applicantname,product_title:product_title,item_code:item_code});
		}


//General  Patent General forms:
		function GeneralPostPatent(transID, amt, agt, xgt, cname, agentemail, agentpnumber, applicantname, product_title,item_code)
		{
		postwith('http://pt.cldng.com/gf/xindex.aspx',{transID:transID,amt:amt,agt:agt,xgt:xgt,cname:cname,agentemail:agentemail,agentpnumber:agentpnumber,applicantname:applicantname,product_title:product_title,item_code:item_code});
		}
		
		//General  Patent General forms:
		function GeneralPostDesign(transID, amt, agt, xgt, cname, agentemail, agentpnumber, applicantname, product_title,item_code)
		{
		postwith('http://ds.cldng.com/gf/xindex.aspx',{transID:transID,amt:amt,agt:agt,xgt:xgt,cname:cname,agentemail:agentemail,agentpnumber:agentpnumber,applicantname:applicantname,product_title:product_title,item_code:item_code});
		}