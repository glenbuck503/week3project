//back end logic

var result = [];


function replace(number) {
  for (var i = 0; i <= number; i++) {
    if (i == "0") {
      result.push('Beep!');
    } else if (i == "1") {
      result.push('Boop!');
    } else if (i % 3 == 0) {
      result.push("I am sorry Dave, I can't do that")
    } else {
      result.push(i);
    }
  }
}

$(document).ready(function() {
  $("form#inputnumbers").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#userInputNumber").val());
    replace(inputtedNumber);
    //console.log(inputtedNumber);

  $("#result1").append(result);

  });
});
