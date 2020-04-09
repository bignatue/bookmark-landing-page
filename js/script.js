function mobileNav() {
  var x = document.getElementById("hamburger-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/** for faqs */
$(document).ready(function(){
  $("#faqs-question1").click(function(){
    $("#faqs-answer1").toggleClass("show").delay("fast");
  });
  $("#faqs-question2").click(function(){
    $("#faqs-answer2").toggleClass("show").delay("fast");
  });
  $("#faqs-question3").click(function(){
    $("#faqs-answer3").toggleClass("show").delay("fast");
  });
  $("#faqs-question4").click(function(){
    $("#faqs-answer4").toggleClass("show").delay("fast");
  });
});