 // Original JavaScript code by Chirp Internet: www.chirp.com.au
 // Please acknowledge use of this code by including this header.

 var today = new Date();
 var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

 function setCookie(name, value) {
     document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
 }

 function getCookie(name) {
     var re = new RegExp(name + "=([^;]+)");
     var value = re.exec(document.cookie);
     return (value != null) ? unescape(value[1]) : null;
 }

 function closeFavourites() {

     document.getElementById("favContainer").style.transition = "all 1s";
     document.getElementById("favContainer").style.opacity = "0";
     document.getElementById("favContainer").style.width = "0px";
     document.getElementById("favContainer").style.height = "0%";
     document.getElementById("favContainer").style.padding = "0px";
     document.getElementById("arrow").style.animation = "revrote 0.5s forwards";
 }

 function storeValues(form) {
     setCookie("name", form.name.value);
     setCookie("filling", form.filling.value);
     setCookie("dish", form.dish.value);
     if (form.DishNoodle.value != "Select Option") {
         setCookie("dishType", form.DishNoodle.value);

     } else if (form.DishCurry.value != "Select Option") {
         setCookie("dishType", form.DishCurry.value);

     } else if (form.DishStirfry.value != "Select Option") {
         setCookie("dishType", form.DishStirfry.value);

     }
     setCookie("drink", form.drink.value);
     setCookie("notes", form.message.value);
     return true;
 }

 function changeDish() {
     var x = document.getElementById("dish");

     switch (x.value) {

         case "Noodle": {
             document.getElementById("noodle").style.display = "block";
             document.getElementById("curry").style.display = "none";
             document.getElementById("stirfry").style.display = "none";
             document.getElementById("noodle").style.animationName = "fadeIn";
             document.getElementById("noodle").style.animationDuration = "1s";
             document.getElementById("DishCurry").selectedIndex = 0;
             document.getElementById("DishStirfry").selectedIndex = 0;
             console.log(document.getElementById("DishStirfry").value);
             return;

         }

         case "Curry": {
             document.getElementById("curry").style.display = "block";
             document.getElementById("stirfry").style.display = "none";
             document.getElementById("noodle").style.display = "none";
             document.getElementById("curry").style.animationName = "fadeIn";
             document.getElementById("curry").style.animationDuration = "1s";
             document.getElementById("DishNoodle").selectedIndex = 0;
             document.getElementById("DishStirfry").selectedIndex = 0;
             return;
         }


         case "StirFry": {
             document.getElementById("curry").style.display = "none";
             document.getElementById("stirfry").style.display = "block";
             document.getElementById("noodle").style.display = "none";
             document.getElementById("stirfry").style.animationName = "fadeIn";
             document.getElementById("stirfry").style.animationDuration = "1s";
             document.getElementById("DishCurry").selectedIndex = 0;
             document.getElementById("DishStirfry").selectedIndex = 0;
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


     let name = getCookie("name");
     let filling = getCookie("filling")
     let dish = getCookie("dish");
     let drink = getCookie("drink");
     let dishType = getCookie("dishType");
     let notes = getCookie("notes");




     document.getElementById("order-list").innerHTML = "<table>" +
         "<tr><td><strong>Name:</strong></td>" +
         "<td>" + name + "</td></tr>" +

         "<tr><td><strong>Filling:</strong></td>" +
         "<td>" + filling + "</td></tr>" +

         "<tr><td><strong>Dish:</strong></td>" +
         "<td>" + dish + "</td> </tr>" +

         "<tr><td><strong>Dish Type:</strong></td>" +
         "<td>" + dishType + "</td> </tr>" +

         "<tr><td><strong>Drink:</strong></td>" +
         "<td>" + drink + "</td></tr>" +

         "<tr><td><strong>Notes:</strong></td>" +
         "<td>" + notes + "</td></tr>" +

         "</table>";

 }

 function showFavourites() {

     if (document.getElementById("favContainer").style.opacity == 0) {
         document.getElementById("favContainer").style.transition = "all 1s";
         document.getElementById("favContainer").style.opacity = "1";
         document.getElementById("favContainer").style.width = "300px";
         document.getElementById("favContainer").style.height = "100%";
         document.getElementById("favContainer").style.padding = "42px 55px 45px 55px";

         document.getElementById("arrow").style.animation = "rote 0.5s forwards";

     } else {
         closeFavourites()


     }
 }

 function loadCookie() {

     if (name = getCookie("name")) document.forms[0].name.value = name;

     if (filling = getCookie("filling")) document.forms[0].filling.value =
         document.getElementsByClassName("select2-selection__rendered")[0].innerHTML = filling;

     if (dish = getCookie("dish")) document.forms[0].dish.value =
         document.getElementsByClassName("select2-selection__rendered")[1].innerHTML = dish;

     changeDish();

     if (dish == "Noodle") {
         if (dishType = getCookie("dishType")) document.forms[0].DishNoodle.value = document.getElementsByClassName("select2-selection__rendered")[2].innerHTML = dishType;

     } else if (dish == "Curry") {
         if (dishType = getCookie("dishType")) document.forms[0].DishCurry.value = document.getElementsByClassName("select2-selection__rendered")[3].innerHTML = dishType;

     } else if (dish == "StirFry") {
         if (dishType = getCookie("dishType")) document.forms[0].DishStirfry.value = document.getElementsByClassName("select2-selection__rendered")[4].innerHTML = dishType;
     }

     if (drink = getCookie("drink")) document.forms[0].drink.value = document.getElementsByClassName("select2-selection__rendered")[5].innerHTML = drink;

     if (notes = getCookie("notes")) document.forms[0].message.value = notes;

     closeFavourites()

 }

 (function ($) {
     "use strict";


     /*==================================================================
    //  [ Focus Contact2 ]*/
     //  $('.input100').each(function () {
     //      $(this).on('blur', function () {
     //          if ($(this).val().trim() != "") {
     //              $(this).addClass('has-val');
     //          } else {
     //              $(this).removeClass('has-val');
     //          }
     //      })
     //  })



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
             document.getElementById("formContainer").style.animationName = "fadeOutDown";
             document.getElementById("formContainer").style.animationDuration = "2s";
             document.getElementById("favContainer").style.transition = "all 1s";
             document.getElementById("favContainer").style.opacity = "0";
             document.getElementById("favContainer").style.width = "0px";
             document.getElementById("favContainer").style.height = "0%";
             document.getElementById("favContainer").style.padding = "0px";
             storeValues(document.forms[0]);

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