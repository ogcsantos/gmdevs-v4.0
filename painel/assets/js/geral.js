function goTo(str, boolean) {
  if (boolean) {
    return window.open(str, "_blank", 'noopener');
  }
  window.location.href = str;
}

$('.tr-modal-open').on('click', function () {
  var attr = $(this).attr('id');
  var str = ".tr-open-" + attr;

  $(str).fadeIn("slow");

  var close = str + " .tr-close";

  $(close).on('click', function () {
    $(str).fadeOut("slow");
  });

});




/* ////////////////////////////////
 * ANIMAÇÃO JS ( DROPDOWN - CLICK )
 //////////////////////////////// */
$('button.dropButton').on('click', function () {
  var attr = $(this).attr('id');
  var str = ".dropContent.menuDropAbrir-" + attr;

  $(str).toggle(500);
});