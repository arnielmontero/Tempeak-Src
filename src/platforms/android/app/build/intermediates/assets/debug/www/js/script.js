/* Password validation */

var password = document.getElementById("password"),
    confirm_password = document.getElementById("c_password"),
    myurl = "http://tp.loyaltypower7.com";

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

/* Ajax Functions */

$(document).ready(function() {

    $("#register").click(function(e) {

        var role = $('#role').val(),
            password = $('#password').val(),
            cpassword = $('#c_password').val();

        if (password != cpassword) {

        } else {

            var firstname = $("#firstname").val();

            /*  var formRegister = {
                  /* 'role': role,*/
            /*  'first_name': $('#firstname').val()*/
            /* 'last_name': $('#lastname').val(),
                 'email': $('#email').val(),
                 'password': $('#password').val(),
                 'birthday': $('#birthday').val(),
            };
*/
            var dataString = "first_name=" + firstname;

            $.ajax({
                type: "POST",
                url: "http://tp.loyaltypower7.com/tester.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                success: function(data) {
                    alert(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {

                    alert(textStatus);
                }

            });

        }
        console.log(e);
        // e.preventDefault();
        // e.stopPropagation();


    });


});