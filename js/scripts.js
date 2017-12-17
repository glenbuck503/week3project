
  var result = [];
// function boop(number) {
//   if
// }
var inputtedNumber = parseInt($("input#userInputNumber").val());
console.log(inputtedNumber);

function test(number) {
  console.log(number);
}

$(document).ready(function() {
  $("form#inputnumbers").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#userInputNumber").val());
    test(a)
    console.log(inputtedNumber);
    for (var i = 0; i <= inputtedNumber; i++) {
      if (i == "0") {
        result.push('Beep!');
      } else if (i == "1") {
        result.push('Boop!');
      } else if (i % 3 == 0) {
        result.push("I am sorry Dave, I can't do that")
      } else {
        result.push(i);
      }
      $('#result1').append(result[i]);

    }
  console.log(result);

  });
});
