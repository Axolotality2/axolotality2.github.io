$(document).ready(function() {
  $(".nav-logo").click(function() {
    $(".side-nav").toggle();
  });

  $(window).click(function() {
    $(".side-nav").hide();
  });

  $("nav").click(function(event) {
    event.stopPropagation();
  });
});