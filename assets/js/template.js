$(document).ready(function () {

  //Desktop
  $("#addCampaign").click(function () {
    $(".campain-created").fadeOut();
    $(".step-one").fadeIn();
  });

  $("#choose-influncer").click(function () {
    $(".first").fadeOut();
    $(".second").fadeIn();
    $(".second-list").addClass("active");

  });

  $("#review").click(function () {
    $(".second").fadeOut();
    $(".third").fadeIn();
    $(".third-list").addClass("active");
  });

  $('#img-uploader').click(function (e) {
    $('#file-upload').click()
  });


  $('#file-upload').change(function () {
    var reader = new FileReader();
    reader.onload = function (e) {
      var preview = document.querySelector('.avatar');
      preview.style.backgroundImage = `url(${e.target.result})`;
      //          preview.style.maxWidth = '350px';
      //          preview.style.maxHeight = '350px';
    }
    reader.readAsDataURL(this.files[0]);
  })
  // $("#addCampaign").click(function(){
  //     $(".campain-created").fadeOut();
  //     $(".step-one").fadeIn();
  // });

  //Mobile
  $("#addCampaign").click(function () {
    $(".campain-created").fadeOut();
    $(".step-one").fadeIn();
  });

  $(".choose-influncer").click(function () {
    $(".step-one").fadeOut();
    $(".step-two").fadeIn();

  });

  $(".review").click(function () {
    $(".step-two").fadeOut();
    $(".step-three").fadeIn();
  });

  $('.img-uploader').click(function (e) {
    $('.file-upload').click()
  });


  $('.file-upload').change(function () {
    var reader = new FileReader();
    reader.onload = function (e) {
      var preview = document.querySelector('.avatar');
      preview.style.backgroundImage = `url(${e.target.result})`;
      //          preview.style.maxWidth = '350px';
      //          preview.style.maxHeight = '350px';
    }
    reader.readAsDataURL(this.files[0]);
  });


  //Increament and decreament
  var incrementPlus;
  var incrementMinus;

  var buttonPlus = $(".cart-qty-plus");
  var buttonMinus = $(".cart-qty-minus");

  var incrementPlus = buttonPlus.click(function () {
    var $n = $(this)
      .parent(".range")
      .parent(".from")
      .parent(".switch")
      .find(".number-range");
    $n.val(Number($n.val()) + 1);
  });

  var incrementMinus = buttonMinus.click(function () {
    var $n = $(this)
      .parent(".range")
      .parent(".to")
      
      .parent(".switch")
      .find(".number-range");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount - 1);
    }
  });
});


var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);

