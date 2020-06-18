$(document).ready(function(){
    $('.accordion-item').click(function(){
        if($(this).hasClass('open')){
            $(this).find('.accordion-paragraf').slideUp();
            $(this).removeClass('open');
        } else{
        $(this).find('.accordion-paragraf').slideDown();
        $(this).addClass('open');
        }
    });
    
});