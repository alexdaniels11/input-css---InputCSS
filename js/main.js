$(document).ready(function(){
    $(".sticker").sticky({topSpacing:0});
  });

$(document).ready(function(){
 
    var applyTopPosition = $('.start').offset().top;
    
    
    $('.scroll').click(function(){
        
        $('html, body').animate({scrollTop:applyTopPosition}, 'slow');
        return false;
    });
});