/* Password validation */

 // var hosturl = "http://tp.loyaltypower7.com/"; 
// var hosturl = "http://localhost/tp/"; 

var password = document.getElementById("password"),
    confirm_password = document.getElementById("c_password"),
    // myurl = "http://tp.loyaltypower7.com/";
    // myurl = "http://localhost/tp/";

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}


password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

/* end here*/
/* Setter and Validation */
$(document).ready(function() {
    $('#email').attr("pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
    $('#password').attr("title", "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");

    $('.date-widget').datetimepicker({
        format: 'MM/DD/YYYY',
    });
});

