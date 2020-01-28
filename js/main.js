function changeDish() {
    var x = document.getElementById("dish");

    switch (x.value) {

        case "Noodle": {
            document.getElementById("noodle").style.display = "block";
            document.getElementById("curry").style.display = "none";
            document.getElementById("stirfry").style.display = "none";
            document.getElementById("noodle").style.animationName = "fadeIn";
            document.getElementById("noodle").style.animationDuration = "1s";

            return;

        }

        case "Curry": {
            document.getElementById("curry").style.display = "block";
            document.getElementById("stirfry").style.display = "none";
            document.getElementById("noodle").style.display = "none";
            document.getElementById("curry").style.animationName = "fadeIn";
            document.getElementById("curry").style.animationDuration = "1s";
            return;
        }


        case "StirFry": {
            document.getElementById("curry").style.display = "none";
            document.getElementById("stirfry").style.display = "block";
            document.getElementById("noodle").style.display = "none";
            document.getElementById("stirfry").style.animationName = "fadeIn";
            document.getElementById("stirfry").style.animationDuration = "1s";
            return;
        }

        default: {
            document.getElementById("curry").style.display = "none";
            document.getElementById("stirfry").style.display = "none";
            document.getElementById("noodle").style.display = "none";
        }
    }
}

function onLoad() {
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("formContainer").style.animationName = "fadeInDown";
    document.getElementById("formContainer").style.animationDuration = "2s";
    document.getElementById("noodle").style.display = "none";
    document.getElementById("curry").style.display = "none";
    document.getElementById("stirfry").style.display = "none";

}



(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })



    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var filling = $('.validate-input select[name="filling"]');
    var drink = $('.validate-input select[name="drink"]');


    $('.validate-form').on('submit', function () {
        var check = true;

        if ($(name).val().trim() == '') {
            showValidate(name);
            check = false;
        }
        if ($(drink).val().trim() == "Select Option") {
            showValidate(drink);
            check = false;
        }
        if (check) {
            document.body.style.overflowY = 'hidden';
            document.getElementById("formContainer").style.animationName = "fadeOutDown";
            document.getElementById("formContainer").style.animationDuration = "2s";
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });


    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }




})(jQuery);