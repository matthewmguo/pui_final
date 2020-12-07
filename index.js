// $('.parallax-window').parallax({imageSrc: "images/cmu.jpg"});
// $('.img-parallax').each(function(){
//     var img = $(this);
//     var imgParent = $(this).parent();
//     function parallaxImg () {
//       var speed = img.data('speed');
//       var imgY = imgParent.offset().top;
//       var winY = $(this).scrollTop();
//       var winH = $(this).height();
//       var parentH = imgParent.innerHeight();
  
//       // The next pixel to show on screen      
//       var winBottom = winY + winH;
  
//       // If block is shown on screen
//       if (winBottom > imgY && winY < imgY + parentH) {
//         // Number of pixels shown after block appear
//         var imgBottom = ((winBottom - imgY) * speed);
//         // Max number of pixels until block disappear
//         var imgTop = winH + parentH;
//         // Porcentage between start showing until disappearing
//         var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
//       }
//       img.css({
//         top: imgPercent + '%',
//         transform: 'translate(-50%, -' + imgPercent + '%)'
//       });
//     }
//     $(document).on({
//       scroll: function () {
//         parallaxImg();
//       }, ready: function () {
//         parallaxImg();
//       }
//     });
//   });
// var h1 = document.getElementById("test")

// function isElementVisible(element) {
//   if (window.innerHeight - element.getBoundingClientRect().top > 0)
//     return true;
//   else return false;
// }

// window.addEventListener("scroll", () => {
//   if (isElementVisible(h1)) {
//     h1.classList.add("animate__bounce")
//   }
// });

//code adapted https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

let visible = false;
$(window).scroll(function(){
  if (isScrolledIntoView($('.subText')) && visible == false){
    visible = true;
    //fire whatever you what 
    console.log("scrolled");
  }
})

// code adapted from https://css-tricks.com/slide-in-as-you-scroll-down-boxes/
var win = $(window);
var allMods = $(".subText");

// Already visible modules
allMods.each(function(i, el) {
  if (isScrolledIntoView(el)) {
    $(el).addClass("already-visible"); 
  } 
});

win.scroll(function(event) {  
  allMods.each(function(i, el) {
    if (isScrolledIntoView(el)) {
      $(el).addClass("come-in"); 
    } 
  });
  
});