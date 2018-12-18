$(document).ready(function (){



  $("#regtarget").submit(function(e) {

    var password = document.getElementById("password")
      , c_password = document.getElementById("c_password");

      function validatePassword(){
        if(password.value != c_password.value) {
          c_password.setCustomValidity("Passwords Don't Match");
        } else {
          c_password.setCustomValidity('');
        }
      }

      password.onchange = validatePassword;
      c_password.onkeyup = validatePassword;


      if(password.value == c_password.value) {
        var role = $("#role").val(),
        			firstname = $("#firstname").val(),
        			lastname = $("#lastname").val(),
        			email = $("#email").val(),
        			passwords = $('#password').val(),
        			dateofbirth = $("#date").val();

        		switch(role){
        			case '0':

        				var dataString = {
        					"role":role,
        					"firstname":firstname,
        					"lastname":lastname,
        					"email":email,
        					"password":passwords,
        					"dateofbirth":dateofbirth,
        				};

        				var dorole = 'Businessregistration';

        			break;

        			case '1':


        				var dorole = 'Registration2';

        				var clinicalstaff = $("#clinicalstaff").val();
        				if($("#speciality").val() != null){
        					var dataString = {
        						"role":role,
        						"firstname":firstname,
        						"lastname":lastname,
        						"email":email,
        						"password":passwords,
        						"dateofbirth":dateofbirth,
        						"clinical_staff":clinicalstaff,
        						"speciality":$("#speciality").val(),
        					};
        				}else{
        					var dataString = {
        					"role":role,
        					"firstname":firstname,
        					"lastname":lastname,
        					"email":email,
        					"password":passwords,
        					"dateofbirth":dateofbirth,
        					"clinical_staff":clinicalstaff,
        					};
        				}
        			break;
        		}
        		$.ajax({
        			type: "POST",
        			url: hosturl +"register",
        			data: dataString,
        			crossDomain: true,
        			cache: false,
        			success: function(data) {
        				if(data == 'false'){
        					alert('Email is already use.');
        				}else{
        					sessionStorage.setItem("key", data);

        					setTimeout(function(){
        						window.location.href="./"+dorole+".html?key="+data;
        					}, 2000);

        				}
        			},
        			error: function(jqXHR, textStatus, errorThrown) {
        				alert(textStatus);
        			}
        		});

        }else{
             c_password.setCustomValidity("Passwords Don't Match");
        }


       e.preventDefault();
        e.stopPropagation();

	
  });
});


function checkKey(){

	if(sessionStorage.getItem("key") != ""){
		var key = sessionStorage.getItem("key");
		
		var docontinue = {
			"key":key,
		}		
		
		$.ajax({			
			type: "POST",
			url: hosturl +"conregister",
			data: docontinue,
			crossDomain: true,
			cache: false,
			success: function(data) {
				  // alert(data);
				
				switch(data){
					case '0':
						setTimeout(function(){											
							window.location.href="./Profile2.html";
						}, 0);	
		
					break;
					
					case '1':
	
						setTimeout(function(){											
							window.location.href="./Profile.html";
						}, 0);	
						
					break;
					
					case 'conbusinessregister':
						setTimeout(function(){											
							window.location.href="./Businessregistration.html";
						}, 1000);	
					break;
					
					case 'concontractorregister':
						setTimeout(function(){											
							window.location.href="./Registration2.html";
						}, 1000);	
						
					break;
					
					
				}
				
			}
		});
		
	}else{
		return false;
	}
	
}


		