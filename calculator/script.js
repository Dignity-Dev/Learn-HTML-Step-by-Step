// Get the buttons container and result input element
var buttonsContainer = document.querySelector('.buttons');
var resultInput = document.getElementById('result');

// Array of button labels
var buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'];

// Loop through the buttons array and create buttons dynamically
buttons.forEach(function(label) {
  var button = document.createElement('button');
  button.textContent = label;
  button.addEventListener('click', handleButtonClick);
  buttonsContainer.appendChild(button);
});

// Handle button click events
function handleButtonClick(event) {
  var buttonValue = event.target.textContent;

  if (buttonValue === 'C') {
    // Clear the result input
    resultInput.value = '';
  } else if (buttonValue === '=') {
    // Evaluate the expression and display the result
    var expression = resultInput.value;
    var result = eval(expression);
    resultInput.value = result;
  } else {
    // Append the button value to the result input
    resultInput.value += buttonValue;
  }
}
