/*global document, $, window*/

$(document).ready(function () {
    
    "use strict";
    
    // Trigger Nice Scroll
    
    $("body").niceScroll({
        
        cursorcolor: "#E41B17",
        
        cursorborder: "1px solid #E41B17",
        
        cursorwidth: "8px"
        
    });
    
    $('.carousel').carousel({
        
        interval: 2000
        
    });
    
    // Show Color Option Div When Click On The Gear
    
    $('.gear-check').click(function () {
        
        $('.color-option').fadeToggle();
        
    });
    
    // Change Theme Color On Click
    
    $('.color-option ul li')
    
        .eq(0).css("backgroundColor", "#E41B17").end()
    
        .eq(1).css("backgroundColor", "#E426D5").end()
    
        .eq(2).css("backgroundColor", "#009AFF").end()
    
        .eq(3).css("backgroundColor", "#FFD500");
    
    $('.color-option ul li').click(function () {
       
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
    
    // Scroll To Top
    
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
            
        }
        
    });
    
    // Click On Button To Scroll Top
        
    scrollButton.click(function () {
            
        $("html,body").animate({ scrollTop : 0}, 2000);
            
    });
    
});

// Loading Screen

$(window).on('load', function () {
    
    "use strict";
    
    // Loading Element
   
    $(".loading-overlay .spinner").fadeOut(1000,
                                     
        function () {
        
            //$("body").css("overflow", "auto");
        
            $(this).parent().fadeOut(1000,
                                 
                function () {
            
                    $(this).remove();
            
                });
        
        });
    
});