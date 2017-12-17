





$(document).ready(function() {
  $("form#inputnumbers").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#userInputNumber").val());

    $("#result").text(inputtedNumber);

  });
});
