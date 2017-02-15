function AppAgentModel() {


    var self = this;
    var url2 = 'http://localhost:4556/Handlers/CheckAccess.ashx';
    var url3 = '/Handlers/GetState.ashx';
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
   
   self.vlogin2 = ko.observable(false);


    self.xid = ko.observable("");

    self.AccreditationType = ko.observable("");

    self.CompanyName = ko.observable("");

   
   
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
	
	
	  self.LogOut2 = function () {
		Session.clear();
		  
		  self.vlogin2(false);
						self.vlogin(true);
						window.location.href = "Index.html";
	      
						
				
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
           ajaxindicatorstart('Loading  Record.. please wait..');
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

					//	window.open("DashBoard.html");
						location.href = "DashBoard.html";
					}
					
					else {
						alert("Invalid Username /Password" )
						Session.set("vlogin5", "false");
						self.vlogin2(false);
						self.vlogin(true);
					}
					
					
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
  
 })();

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