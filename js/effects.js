
$(document).ready(function(){
  var navbar = document.getElementById("navbar5");
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
          window.location.hash = hash;
          $(navbar).css("display","none");
        });
      } 
    });
  });

  $(document).ready(function(){
    var navbar = document.getElementById("navbar5");
    var navbutton = document.getElementById("nav-button");

    $(navbutton).on('click', function(event) {
      if($(navbar).css('display') == 'none'){
        $(navbar).css('display','inline');
      } else{
        $(navbar).css('display','none');
      }
    });
  });
