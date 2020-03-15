$(function () {


  /* ////////////////////////////////////// *
   * [ SISTEMA JS ( EDITOR - SUMMERNOTE ) ] *
   * ////////////////////////////////////// */
  $('.summernoteChange').summernote({
    tabsize: 2,
    height: 235,
    responsive: true,
    toolbar: [
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['insert', ['link']]
    ],
    lang: "pt-BR"
  });





  $('.summernote').summernote({
    tabsize: 2,
    height: 235,
    maxHeight: null,
    minHeight: null,
    responsive: true,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ol', 'ul']],
      ['insert', ['link', 'picture']]
    ],
    lang: "pt-BR"
  });

  $('.note-editable').css('font-familly', 'Ubuntu');

  /*$('.summernote').summernote('insertImage', url, function ($image) {
      $image.css('width', $image.width() / 3);
      $image.attr('data-filename', 'retriever');
  });*/


  $('.table').DataTable({
    "language": {
      "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
    }
  });



});



/* ///////////////////////////////////
 * SISTEMA JS ( DOCUMENTAÇÃO - CLICK )
 /////////////////////////////////// */
$('button.cardDoc-one').on('click', function () {

  var global = this;
  var attr = $(this).attr('id');
  var str = ".abrirDoc-" + attr;

  $(str).toggle(500)
  $(global).toggleClass('ativo', this);
});