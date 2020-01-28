function changeDish(){
    var x = document.getElementById("dish");

     if(x.value == "Noodle"){
        document.getElementById("noodle").style.display = "block";
        document.getElementById("curry").style.display = "none";
        document.getElementById("stirfry").style.display = "none";
        document.getElementById("noodle").style.animationName ="wobble";
        document.getElementById("noodle").style.animationDuration = "0.75s";
        document.getElementById("stirfry").disabled = "disabled";
        document.getElementById("noodle").disabled = "enabled";
        document.getElementById("curry").disabled = "disabled";
        document.getElementById("DishCurry").selectedIndex = 0;
        document.getElementById("DishStirfry").selectedIndex = 0;

     }
     if(x.value == "Curry"){
        document.getElementById("curry").style.display = "block";
        document.getElementById("stirfry").style.display = "none";
        document.getElementById("noodle").style.display = "none";
        document.getElementById("stirfry").disabled = "disabled";
        document.getElementById("noodle").disabled = "disabled";
        document.getElementById("curry").disabled = "enabled";
        document.getElementById("DishNoodle").selectedIndex = 0;
        document.getElementById("DishStirfry").selectedIndex = 0;
     }
     if(x.value == "StirFry"){
        document.getElementById("curry").style.display = "none";
        document.getElementById("stirfry").style.display = "block";
        document.getElementById("noodle").style.display = "none";
        document.getElementById("stirfry").disabled = "enabled";
        document.getElementById("noodle").disabled = "disabled";
        document.getElementById("curry").disabled = "disabled";
        document.getElementById("DishCurry").selectedIndex = 0;
        document.getElementById("DishNoodle").selectedIndex = 0;
     }
 }
 function hideLists(){
        document.getElementById("noodle").style.display = "none";
        document.getElementById("curry").style.display = "none";
        document.getElementById("stirfry").style.display = "none";
        document.getElementById("stirfry").disabled = "disabled";
        document.getElementById("noodle").disabled = "disabled";
        document.getElementById("curry").disabled = "disabled";
     
 }

(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    
  
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');
    var drink = $('.validate-input select[name="drink"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }
        if($(drink).val().trim() == "Select Option"){
            showValidate(drink);
            check=false;
        }
        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
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