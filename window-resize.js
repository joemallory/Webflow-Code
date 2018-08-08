$( window ).resize (function() {
 if ($(window).width() > 991) {
   $('.nav__menu-inner').css('display', 'flex');
   $('#nav-close-btn').css('display', 'none');
 }
else {
 $('.nav__menu-inner').css('display', 'none');
 $('#nav-close-btn').css('display', 'none');

}
});
