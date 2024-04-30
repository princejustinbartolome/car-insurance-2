$(document).ready(function() {

    $('input[type=number][max]:not([max=""])').on('input', function(ev) {
      var $this = $(this);
      var maxlength = $this.attr('max').length;
      var value = $this.val();
      if (value && value.length >= maxlength) {
        $this.val(value.substr(0, maxlength));
      }
    });
    $('input[type=number][max]:not([max=""])').on('keydown', function(event) {
        if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 46 || (event.keyCode >= 37 && event.keyCode <= 40))) {
            event.preventDefault();
        }
    });
  
  });