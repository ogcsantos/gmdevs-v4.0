/* /////////////////////////////
 * ANIMAÇÃO JS ( BOTÃO - CLICK )
 //////////////////////////// */
function goTo(str, boolean) {
  if (boolean) {
    return window.open(str, "_blank", 'noopener');
  }
  window.location.href = str;
}





/* ///////////////////////////////////
 * ANIMAÇÃO JS ( MENU MOBILE - CLICK )
 /////////////////////////////////// */
$('.mobileUl li').on('click', function () {
  var attr = $(this).attr('id');
  var str = ".mobileMenuAbrir-" + attr;

  $(str).toggle(500);
});