$(function () {

});




/* /////////////////////
 * SISTEMA JS ( MODAL )
 //////////////////// */

$('.tr-modal-open').on('click', function () {
  var attr = $(this).attr('id');
  var str = ".tr-open-" + attr;

  $(str).fadeIn("slow");

  var close = str + " .tr-close";

  $(close).on('click', function () {
    $(str).fadeOut("slow");
  });
});



/* ///////////////////////////////////
 * ANIMAÇÃO JS ( MENU MOBILE - CLICK )
 /////////////////////////////////// */
$('.mobileUl li').on('click', function () {
  var attr = $(this).attr('id');
  var str = ".mobileMenuAbrir-" + attr;

  $(str).toggle(500);
});