

$(document).ready(function () {
  // $(".fa-bars").click(function () {
  //   $(".modal-cont").show();
  // })

  // $(".fa-times").click(function () {
  //   $(".modal-cont").fadeOut();
  // });

  $(".hamburger").click(function () {
    $(".modal_cont").show();
  })

  $(".fa-times").click(function () {
    $(".modal_cont").fadeOut();
    $(".success").fadeOut();
    $('.nofication-modal').fadeOut();
  });

  $(".fa-bell").click(function () {
    $('.nofication-modal').show();
  });

  $('.code-text').click(function () {
    $('.referral').fadeIn(1000);
    $('.code').fadeOut(200);
  })

  $('.dismiss').click(function () {
    $(".card_add").hide();
    $('.card-added').fadeIn();
    $(".success").fadeIn();
  });


  $(".filter-button").click(function() {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    }
    else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');

    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");


  $('.dropdown-menu button').click(function() {
    console.log($(this).attr('data-value'));
    $(this).closest('.dropdown').find('input.countrycode')
      .val($(this).attr('data-value'));
  });

  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });



  var selectedPreference = [];
  //const category = element.data("name")

  $(".eventBtn").click(function () {
    let category = $(this).data("name");
    //$(this).getAttribute('date-name').selectedPreference.push();

    if (selectedPreference.includes(category)) {
      const index = selectedPreference.indexOf(category);
      if (index > -1) {
        selectedPreference.splice(index, 1);
      }
    } else {
      selectedPreference.push(category);
    }

    $('#rightDiv').empty()
    $.each(selectedPreference, function (i, l) {
      let tweet = $("<div class='tweet'>" + l + '<i class="fas fa-times"></i>' + "</div>");
      $('#rightDiv').append(tweet);
    });

    $('.later').hide();
    $('.done').show();
    console.log(selectedPreference);

    $('.fa-times').click(function () {
      $('.tweet').fadeOut();
    });
  });



  $('.click-button').click(function (){

    var $input = $(this).closest('div').find('.copy-text');

    /* Select the text field */
    $input.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    // $(this)
    //     .popup({
    //         title    : 'Successfully copied to clipboard!',
    //         content  : 'Share this link with your receiver or distributor so they can confirm their order.',
    //         on: 'manual',
    //         exclusive: true
    //     })
    //     .popup('show')
    // ;

    // // Hide popup after 5 seconds
    // delayPopup(this);


});
  // var element = $('#p1')
  // $('.fa-copy').click(function (element) {
  //   var $temp = $("<input>");
  //   $("body").append($temp);
  //   $temp.val($(element).text()).select();
  //   document.execCommand("copy");
  //   $temp.remove();
  // });


  var banks = [
    { "id": "1", "name": "Access Bank" ,"code":"044" },
    { "id": "2", "name": "Citibank","code":"023" },
    { "id": "3", "name": "Diamond Bank","code":"063" },
    { "id": "4", "name": "Dynamic Standard Bank","code":"" },
    { "id": "5", "name": "Ecobank Nigeria","code":"050" },
    { "id": "6", "name": "Fidelity Bank Nigeria","code":"070" },
    { "id": "7", "name": "First Bank of Nigeria","code":"011" },
    { "id": "8", "name": "First City Monument Bank","code":"214" },
    { "id": "9", "name": "Guaranty Trust Bank","code":"058" },
    { "id": "10", "name": "Heritage Bank Plc","code":"030" },
    { "id": "11", "name": "Jaiz Bank","code":"301" },
    { "id": "12", "name": "Keystone Bank Limited","code":"082" },
    { "id": "13", "name": "Providus Bank Plc","code":"101" },
    { "id": "14", "name": "Polaris Bank","code":"076" },
    { "id": "15", "name": "Stanbic IBTC Bank Nigeria Limited","code":"221" },
    { "id": "16", "name": "Standard Chartered Bank","code":"068" },
    { "id": "17", "name": "Sterling Bank","code":"232" },
    { "id": "18", "name": "Suntrust Bank Nigeria Limited","code":"100" },
    { "id": "19", "name": "Union Bank of Nigeria","code":"032" },
    { "id": "20", "name": "United Bank for Africa","code":"033" },
    { "id": "21", "name": "Unity Bank Plc","code":"215" },
    { "id": "22", "name": "Wema Bank","code":"035" },
    { "id": "23", "name": "Zenith Bank","code":"057" }
];

$.each(banks, function(key, val) {
  $("#bank_selected").append("<option value='" + key + "'>" + val.name + "</option>");
});



});


