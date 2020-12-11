//code adapted https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var hosted = $("#hostedby")

// code adapted from https://css-tricks.com/slide-in-as-you-scroll-down-boxes/
var win = $(window);
var allMods = $(".subText");

// Already visible modules
allMods.each(function(i, el) {
  if (isScrolledIntoView(el)) {
    $(el).addClass("already-visible"); 
  } 
});

if (isScrolledIntoView(hosted)) {
  $(hosted).addClass("already-visible"); 
} 

win.scroll(function(event) {  
  //hosted image by animation
  if (isScrolledIntoView(hosted)) {
    hosted.addClass("come-into");
  }
  allMods.each(function(i, el) {
    if (isScrolledIntoView(el)) {
      $(el).addClass("come-in"); 
    } 
  }); 
});

$(document).ready(function(){
  $("#invited-text").addClass("hover")
}) 
