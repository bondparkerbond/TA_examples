function getInputs(){
  var inputOne = parseFloat(document.getElementById('input_1').value);
  var inputTwo = parseFloat(document.getElementById('input_2').value);
  return [inputOne, inputTwo];
}

var math = 0
function operator(choice){
  math = choice;
}

function calculate(){
  var inputs = getInputs();
  if (math == 1){
    var output = inputs[0] + inputs[1];
  }
  else if (math == 2){
    var output = inputs[0] - inputs[1];
  }
  else if (math == 3){
    var output = inputs[0] * inputs[1];
  }
  else if (math == 4){
    var output = inputs[0] / inputs[1];
  }
  else{
    var  output = "Select an operand first!"
  }
  document.getElementById('output').innerHTML = output;
}