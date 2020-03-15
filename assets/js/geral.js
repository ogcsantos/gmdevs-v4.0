function goTo(str, boolean) {
  if (boolean) {
    return window.open(str, "_blank", 'noopener');
  }
  window.location.href = str;
}




$(function () {

  var clipboard = new Clipboard('.ip-copiar');
  clipboard.on('success', function (e) {
    $(e.trigger).html("PRONTO, VAMOS LÁ!");
    setTimeout(function () {
      $(e.trigger).html("HYPIXEL.NET");

    }, 1000);
  });

});