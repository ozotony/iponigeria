

function AppAgentModel() {


    var self = this;
    var url2 = 'http://localhost:4556/Handlers/CheckAccess.ashx';
    var url3 = 'http://localhost:4556/Handlers/BranchCollect3.ashx';
    var url = 'http://localhost:4556/Handlers/a_login2.ashx';
    var url4 = '/Handlers/EmailCount.ashx';
    





   

    self.Firstname = ko.observable("");
	
	self.Sys_ID = ko.observable("");

    self.SurName = ko.observable("");
  // self.AccountType = ko.observable("").extend({ required: { message: 'Select Account Type.' } });;;;;
   self.Email = ko.observable("");
   
   self.Agent_Name = ko.observable("");
   
    self.greeting = ko.observable("");
   
   self.Password = ko.observable("");
   
   self.vlogin = ko.observable(true);

   self.vvisible2 = ko.observable(false);
   
   self.TransactionID = ko.observable("");
    self.CustomerFirstname = ko.observable("");
	self.Agent_name = ko.observable("");
	
	self.TransactionDate = ko.observable("");
	
	self.ItemDescription = ko.observable("");
	
	self.ItemAmount = ko.observable("");
	
	self.paymentcode = ko.observable("");
   
  
   self.vlogin2 = ko.observable(false);
    self.paymentData = ko.observableArray([]);


    self.xid = ko.observable("");

    self.AccreditationType = ko.observable("");

    self.CompanyName = ko.observable("");
	
	this.currentPage = ko.observable(1);
    this.perPage = 50;
    this.pagedItems = ko.computed(function(){
        var pg = this.currentPage(),
            start = this.perPage * (pg-1),
            end = start + this.perPage;
        return this.paymentData().slice(start,end);
    }, this);
    this.nextPage = function(){
        if(this.nextPageEnabled())
            this.currentPage(this.currentPage()+1);
    };
    this.nextPageEnabled = ko.computed(function(){
        return this.paymentData().length > this.perPage * this.currentPage();
    },this);
    this.previousPage = function(){
        if(this.previousPageEnabled())
            this.currentPage(this.currentPage()-1);
    };
    this.previousPageEnabled = ko.computed(function(){
        return this.currentPage() > 1;
    },this);
	
	

   
   
   var message=new Date()
var h=message.getHours()
if((h < 12) && (h >= 6))
{self.greeting("Good Morning" ) }  
if((h >= 12) && (h < 18))

{self.greeting("Good Afternoon" )} 
if((h >= 18) && (h <= 23))
{self.greeting("Good Evening" )} 

self.Agent_Name(Session.get("vname"))


self.Sys_ID(Session.get("Sys_ID"))
   $(document).ready(function () {
	   if (Session.get('vlogin5') != null ) {
		   self.vlogin2(true);
						self.vlogin(false);
	   }
	   else {
		    self.vlogin2(false);
			self.vlogin(true);
	   }
	 
   

 

 });
    //ko.validation.init({
    //    decorateInputElement: true
    //});
	 var SponsData3 = {


            Agent_Code: Session.get("Sys_ID"),
            TransactionId: self.TransactionID()


        };
	  var formData = new FormData();
	  
	   formData.append("vv", ko.toJSON(SponsData3));
	   ajaxindicatorstart('Loading  Record.. please wait..');
            $.ajax({
                type: "POST",
                url: url3,
                data: formData,

                contentType: false,
                processData: false,
                //Convert the Observable Data into JSON
                dataType: 'json',
                success: function (data) {
					self.paymentData(data);
					
					ajaxindicatorstop();
                 
                 
                 //   self.availablesponsor(data);
                    //self.EmpNo(data.EmpNo);
                    //alert("The New Employee Id :" + self.EmpNo());
                    //GetEmployees();
                },
                error: function (ee) {
                    ajaxindicatorstop();
                    //alert(ee);
                }
            });
	  
	  
            self.Updaterec = function (data) {

                alert(data.paymentcode.substring(0, 1));
                if (data.paymentcode == "T002") {

                  //  NonGenericTradeMarks(data.TransactionID, data.ItemAmount, Session.get("Sys_ID"), 'cbt', data.CustomerFirstname, applicantemail, applicantpnumber, agentname, agentemail, agentpnumber, product_title, item_code);

                    NonGenericTradeMarks(data.TransactionID, data.ItemAmount, Session.get("Sys_ID"), 'cbt', data.CustomerFirstname, data.ApplicantEmail, data.ApplicantPhone, data.Agent_name, data.ApplicantPhone, data.ApplicantPhone, data.ItemDescription, "T002");
                }


                if (data.paymentcode.substring(0, 1) == "T" && data.paymentcode != "T002") {

                    //  NonGenericTradeMarks(data.TransactionID, data.ItemAmount, Session.get("Sys_ID"), 'cbt', data.CustomerFirstname, applicantemail, applicantpnumber, agentname, agentemail, agentpnumber, product_title, item_code);

                    GenericTradeMarks(data.TransactionID, data.ItemAmount, Session.get("Sys_ID"), 'cbt', data.CustomerFirstname, data.ApplicantEmail, data.ApplicantPhone, data.Agent_name, data.ApplicantPhone, data.ApplicantPhone, data.ItemDescription, data.paymentcode);
                }


                if (data.paymentcode == "P003") {

                    //  NonGenericTradeMarks(data.TransactionID, data.ItemAmount, Session.get("Sys_ID"), 'cbt', data.CustomerFirstname, applicantemail, applicantpnumber, agentname, agentemail, agentpnumber, product_title, item_code);

                    P003Function(data.TransactionID, data.ItemAmount, Session.get("Sys_ID"), 'cbt', data.CustomerFirstname, data.ApplicantEmail, data.ApplicantPhone, data.Agent_name, data.ApplicantPhone, data.ApplicantPhone, data.ItemDescription, data.paymentcode);
                }

                if (data.paymentcode.substring(0, 1) == "P" && data.paymentcode != "P003") {

                    //  NonGenericTradeMarks(data.TransactionID, data.ItemAmount, Session.get("Sys_ID"), 'cbt', data.CustomerFirstname, applicantemail, applicantpnumber, agentname, agentemail, agentpnumber, product_title, item_code);

                    GeneralPostPatent(data.TransactionID, data.ItemAmount, Session.get("Sys_ID"), 'cbt', data.CustomerFirstname, data.ApplicantEmail, data.ApplicantPhone, data.Agent_name, data.ApplicantPhone, data.ApplicantPhone, data.ItemDescription, data.paymentcode);
                }

                if (data.paymentcode.substring(0, 1) == "D") {

                    //  NonGenericTradeMarks(data.TransactionID, data.ItemAmount, Session.get("Sys_ID"), 'cbt', data.CustomerFirstname, applicantemail, applicantpnumber, agentname, agentemail, agentpnumber, product_title, item_code);

                    GeneralPostDesign(data.TransactionID, data.ItemAmount, Session.get("Sys_ID"), 'cbt', data.CustomerFirstname, data.ApplicantEmail, data.ApplicantPhone, data.Agent_name, data.ApplicantPhone, data.ApplicantPhone, data.ItemDescription, data.paymentcode);
                }
                
		
	  }
	  
	   self.Updaterec2 = function () {
		   
		    var SponsData4 = {


            Agent_Code: Session.get("Sys_ID"),
            TransactionId: self.TransactionID()


        };
	  var formData = new FormData();
	  
	   formData.append("vv", ko.toJSON(SponsData4));
	   ajaxindicatorstart('Loading  Record.. please wait..');
            $.ajax({
                type: "POST",
                url: url3,
                data: formData,

                contentType: false,
                processData: false,
                //Convert the Observable Data into JSON
                dataType: 'json',
                success: function (data) {
					self.paymentData(data);
					ajaxindicatorstop();
					
                 
                 
                 //   self.availablesponsor(data);
                    //self.EmpNo(data.EmpNo);
                    //alert("The New Employee Id :" + self.EmpNo());
                    //GetEmployees();
                },
                error: function (ee) {
                    ajaxindicatorstop();
                    //alert(ee);
                }
            });
		
	  }
	  self.LogOut2 = function () {
		Session.clear();
		  
		  self.vlogin2(false);
						self.vlogin(true);
						
						window.open("Index.html");
	  }
	
	  self.LogOut = function () {
		  Session.clear();
		  
		  self.vlogin2(false);
						self.vlogin(true);
	  }
    self.save = function () {



        var formData = new FormData();

        var SponsData = {


            email: self.Email,
            xpass: self.Password,
			request:'vlogin'


        };

       
       
          
           
           formData.append("vv", ko.toJSON(SponsData));

            $.ajax({
                type: "POST",
                url: url,
                data: formData,

                contentType: false,
                processData: false,
                //Convert the Observable Data into JSON
                dataType: 'json',
                success: function (data) {
					if(data!="false") {
						
						self.vlogin2(true);
						self.vlogin(false);
						Session.set("vname", data.Firstname + " " + data.Surname);
						self.Agent_Name(Session.get("vname"))
						Session.set("vlogin5", "true");
						Session.set("Sys_ID", data.Sys_ID);
						
					}
					
					else {
						alert("Invalid Username /Password" )
						Session.set("vlogin5", "false");
						self.vlogin2(false);
						self.vlogin(true);
					}
					
					
                 
                 
                 //   self.availablesponsor(data);
                    //self.EmpNo(data.EmpNo);
                    //alert("The New Employee Id :" + self.EmpNo());
                    //GetEmployees();
                },
                error: function (ee) {
                 
                    //alert(ee);
                }
            });

       
    }


 

}

 if (JSON && JSON.stringify && JSON.parse) var Session = Session || (function() {
  
  // window object
  var win = window.top || window;
   
  // session store
  var store = (win.name ? JSON.parse(win.name) : {});
   
  // save store on page unload
  function Save() {
    win.name = JSON.stringify(store);
  };
   
  // page unload event
  if (window.addEventListener) window.addEventListener("unload", Save, false);
  else if (window.attachEvent) window.attachEvent("onunload", Save);
  else window.onunload = Save;
 
  // public methods
  return {
   
    // set a session variable
    set: function(name, value) {
      store[name] = value;
    },
     
    // get a session value
    get: function(name) {
      return (store[name] ? store[name] : undefined);
    },
     
    // clear session
    clear: function() { store = {}; },
     
    // dump session data
    dump: function() { return JSON.stringify(store); }
  
  };
  
 })();// JavaScript Document



 function doPost(transID, amt, agent, xgt, cname, agentemail, agentpnumber, applicantname, product_title) {
     postwith('http://tm.cldng.com/xindex.aspx', { transID: transID, amt: amt, agent: agent, xgt: xgt, cname: cname, agentemail: agentemail, agentpnumber: agentpnumber, applicantname: applicantname, product_title: product_title });
 }


 // http://tm.cldng.com/xtm/xindex.aspx and Generic Form URL : http://tm.cldng.com/xtm/gf/xindex.aspx 

 function NonGenericTradeMarks(transID, amt, agt, xgt, applicantname, applicantemail, applicantpnumber, agentname, agentemail, agentpnumber, product_title, item_code) {
     postwith('http://tm.cldng.com/xind.aspx', {
         transID: transID,
         amt: amt,
         agent: agt,
         xgt: xgt,
         applicantname: applicantname,
         applicantemail: applicantemail,
         applicantpnumber: applicantpnumber,
         agentname: agentname,
         agentemail: agentemail,
         agentpnumber: agentpnumber,
         product_title: product_title,
         item_code: item_code
     });
 }


 function GenericTradeMarks(transID, amt, agt, xgt, applicantname, applicantemail, applicantpnumber, agentname, agentemail, agentpnumber, product_title, item_code) {
     postwith('http://tm.cldng.com/gf/xindex.aspx', {
         transID: transID,
         amt: amt,
         agt: agt,
         xgt: xgt,
         applicantname: applicantname,
         applicantemail: applicantemail,
         applicantpnumber: applicantpnumber,
         agentname: agentname,
         agentemail: agentemail,
         agentpnumber: agentpnumber,
         product_title: product_title,
         item_code: item_code
     });
 }

 function postwith(to, p) {
     var myForm = document.createElement("form");
     myForm.method = "post";
     myForm.action = to;
     for (var k in p) {
         var myInput = document.createElement("input");
         myInput.setAttribute("name", k);
         myInput.setAttribute("value", p[k]);
         myForm.appendChild(myInput);
     }
     document.body.appendChild(myForm);
     myForm.submit();
     document.body.removeChild(myForm);
 }

 function GeneralPostPatent(transID, amt, agt, xgt, cname, agentemail, agentpnumber, applicantname, product_title, item_code) {
     postwith('http://pt.cldng.com/xindex.aspx', { transID: transID, amt: amt, agent: agt, xgt: xgt, agentname: cname, agentemail: agentemail, agentpnumber: agentpnumber, applicantname: applicantname, product_title: product_title, pc: item_code });
 }

 function GeneralPostDesign(transID, amt, agt, xgt, cname, agentemail, agentpnumber, applicantname, product_title, item_code) {
     postwith('http://ds.cldng.com/xindex.aspx', { transID: transID, amt: amt, agent: agt, xgt: xgt, agentname: cname, agentemail: agentemail, agentpnumber: agentpnumber, applicantname: applicantname, product_title: product_title, pc: item_code });
 }
 function P003Function(transID, amt, agt, xgt, applicantname, applicantemail, applicantpnumber, agentname, agentemail, agentpnumber, product_title, item_code) {
     postwith('http://pt.cldng.com/xindex_ren.aspx', {
         transID: transID,
         amt: amt,
         agt: agt,
         xgt: xgt,
         applicantname: applicantname,
         applicantemail: applicantemail,
         applicantpnumber: applicantpnumber,
         agentname: agentname,
         agentemail: agentemail,
         agentpnumber: agentpnumber,
         product_title: product_title,
         item_code: item_code
     });
 }


 function ajaxindicatorstart(text) {

     if (jQuery('body').find('#resultLoading').attr('id') != 'resultLoading') {

         jQuery('body').append('<div id="resultLoading" style="display:none"><div><img src="ajax-loader.jpg"><div>' + text + '</div></div><div class="bg"></div></div>');

     }



     jQuery('#resultLoading').css({

         'width': '100%',

         'height': '100%',

         'position': 'fixed',

         'z-index': '10000000',

         'top': '0',

         'left': '0',

         'right': '0',

         'bottom': '0',

         'margin': 'auto'

     });



     jQuery('#resultLoading .bg').css({

         'background': '#000000',

         'opacity': '0.7',

         'width': '100%',

         'height': '100%',

         'position': 'absolute',

         'top': '0'

     });



     jQuery('#resultLoading>div:first').css({

         'width': '250px',

         'height': '75px',

         'text-align': 'center',

         'position': 'fixed',

         'top': '0',

         'left': '0',

         'right': '0',

         'bottom': '0',

         'margin': 'auto',

         'font-size': '16px',

         'z-index': '10',

         'color': '#ffffff'



     });



     jQuery('#resultLoading .bg').height('100%');

     jQuery('#resultLoading').fadeIn(300);

     jQuery('body').css('cursor', 'wait');

 }

 function ajaxindicatorstop() {

     jQuery('#resultLoading .bg').height('100%');

     jQuery('#resultLoading').fadeOut(300);

     jQuery('body').css('cursor', 'default');

 }
