function getInputs(){
  var inputOne = parseFloat(document.getElementById('input_1').value);
  var inputTwo = parseFloat(document.getElementById('input_2').value);
  return [inputOne, inputTwo];
}

// function add(){
//   var inputs = getInput();
//   var output = inputs[0] + inputs[1];
//   setOutput(output);
// }

// function subtract(){
//   var inputOne = document.getElementById('input_1').value;
//   var inputTwo = document.getElementById('input_2').value;
//   var output = parseInt(inputOne) - parseInt(inputTwo);
//   document.getElementById('output').innerHTML = output;
// }

// function multiply(){
//   var choice = 3;
//   return choice;
// }

// function divide(){
//   var inputs = getInputs();
//   var calculate = inputs[0] / inputs[1];
//   setOutput(calculate);
// }
var math = 0

function operator(choice){
  math = choice;
}

function calculate(){
  var inputs = getInputs();
  // var math = operator();
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

// function setOutput(){
//   document.getElementById('output').innerHTML = output;
// }
