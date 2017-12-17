$(document).ready(function() {
  $("form#inputnumbers").submit(function(event) {
    event.preventDefault();
    var finalNumber = parseInt($("input#userInputNumber").val());

    $("#result").text(finalNumber);

  });
});
