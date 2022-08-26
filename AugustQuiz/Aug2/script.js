const countChecked = function() {
  let n = $( "input:checked" ).length;
  if(n == 0) {
    $('.button-area').removeClass('show');
  } else {
    $('.button-area').addClass('show');
    $( ".dl-all-btn" ).text( "Download " + n + (n === 1 ? " file" : " files"));
  }
};

$( "input[type=checkbox]" ).on( "click", function(){

  if( $(this).is(':checked') ) {
    countChecked();
  } else {
    countChecked();
  }
});

$('.js-clear-btn').on( 'click', function( e ) {
  $( "input:checked" ).prop('checked', false);
  $('.button-area').removeClass('show');
  countChecked();
  e.preventDefault();
});