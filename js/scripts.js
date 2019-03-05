
$(document).ready(function() {
  $("form#factorials").submit(function(event) {
    event.preventDefault();
    var operator = parseInt($("input#operator").val());
    var result = factorialize (operator);



      $("#result").text(result);
});
});

function factorialize(operator) {
    var result = operator;
    for (var i = operator -1; i >=1 ; i--){
      result *= i;
    }
    return result;
  }
